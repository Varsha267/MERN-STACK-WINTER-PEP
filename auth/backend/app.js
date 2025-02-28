require("dotenv").config(); 
require("./config/dbConfig.js"); 
const PORT = process.env.PORT || 1814; 
const express = require("express"); 
const morgan = require("morgan"); 
const cors = require("cors");
const User = require("./models/userModel.js");
const { generateOTP } = require("./utils/otpHelper.js");
const { sendOtpEmail } = require("./utils/emailHelper.js");
const OTP = require("./models/otpModel.js");
const bcrypt = require("bcrypt");

// --------------------------------------------------------------
const app = express(); 
// --------------------------------------------------------------

app.use(cors()); 
app.use(express.json());
app.use((req, res, next) => {
    console.log("request received -->", req.url);
    next();
}); 

app.get("/", (req, res) => {
    res.send("<h1>Server is working fine ...</h1>");
});

app.use(morgan("dev"));
app.get("/users", (req, res) => {
    try {
      
    } catch (err) {
        console.log("Error in GET /users");
        console.log(err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error " + err.message,
        });
    }
});



app.post("/users/register", async (req, res) => {
    try {
        const { email, password, otp } = req.body;

       
        console.log("Searching for OTP for email:", email);
        const otpDoc = await OTP.findOne({
            email: email.trim().toLowerCase(),
        }).sort("-createdAt").exec();

        console.log("Found OTP document:", otpDoc);
        
        if (!otpDoc) {
            console.log("No OTP found or it has expired");

            res.status(400);
            res.json({
                status: "fail",
                message: "Either OTP is not sent to the given email or it is expired! Please try again!",
            });
            return;
        }

        const { otp: hashedOtp, createdAt } = otpDoc; 

        // Check if OTP is expired (10 minutes)
        const now = new Date();
        const otpAge = now - createdAt;
        const otpExpired = otpAge > 10 * 60 * 1000; // 10 minutes in milliseconds
        
        if (otpExpired) {
            console.log("OTP expired. Age:", otpAge / 1000, "seconds");
            res.status(400);
            res.json({
                status: "fail",
                message: "OTP has expired! Please request a new one.",
            });
            return;
        }

        // verify if the otp is correct
        const isOtpCorrect = await bcrypt.compare(otp.toString(), hashedOtp);
        if (!isOtpCorrect) {
            console.log("Invalid OTP provided");

            res.status(401);
            res.json({
                status: "fail",
                message: "Invalid OTP !",
            });
            return;
        }

        
        const hashedPassword = await bcrypt.hash(password, 14);

        const newUser = await User.create({
            email,
            password: hashedPassword,
        });

        res.status(201);
        res.json({
            status: "success",
            data: {
                user: {
                    email: newUser.email,
                    fullName: newUser.fullName,
                },
            },
        });
    } catch (err) {
        console.log("--- Error in /POST users ---");
        console.log(err.name, err.code);
        console.log(err.message);
        if (err.name === "ValidationError") {
            // mistake of client that he has not sent the valid data
            res.status(400);
            res.json({
                status: "fail",
                message: "Data validation failed: " + err.message,
            });
        } else if (err.code === 11000) {
            // mistake of client that he is using the email which already registered
            res.status(400);
            res.json({
                status: "fail",
                message: "Email already exists!",
            });
        } else {
            // generic mistake by server
            res.status(500);
            res.json({
                status: "fail",
                message: "Internal Server Error",
            });
        }
    }
});


// request handler to send otp for given email
app.post("/otps", async (req, res) => {
    const { email } = req.query; // http://localhost:1814/otps?email=var@abc.com
    
    if (!email) {
        res.status(400).json({
            status: "fail",
            message: 'Missing required parameter: "email"',
        });
        return;
    }

    
    const otp = generateOTP();

   
    const isEmailSent = await sendOtpEmail(email, otp);

    
    if (!isEmailSent) {
        
        res.status(500).json({
            status: "fail",
            message: "Email could not be sent! Please try again after 30 seconds!",
        });
        return;
    }

  
    const newSalt = await bcrypt.genSalt(14); 
    const hashedOtp = await bcrypt.hash(otp.toString(), newSalt);

    try {
        const otpDoc = await OTP.create({
            email,
            otp: hashedOtp,
        });
        console.log("OTP successfully stored in database for email:", email);
        console.log("Stored OTP document:", otpDoc);
    } catch (err) {
        console.error("Error storing OTP in database:");
        console.error("Error details:", {
            name: err.name,
            message: err.message,
            stack: err.stack,
            code: err.code,
            keyPattern: err.keyPattern,
            keyValue: err.keyValue
        });
        throw err;
    }


    res.status(201);

    res.json({
        status: "success",
        message: `OTP sent to ${email}`,
    });
});
app.post("/users/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            res.json({
            status: "fail",
            message: "Email and password is required!",
            });
            }
        const currUser = await User.findOne({ email: email });
        if (!currUser) {
            res.status(400);
            res.json({
                status: "fail",
                message: "User is not registered!",
            });
            return;
        }
       
        const { password: hashedPassword, fullName } = currUser;
        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
        // if password is incorrect
        if (!isPasswordCorrect) {
            res.status(401);
            res.json({
                status: "fail",
                message: "Invalid email or password!",
            });
            return;
        }
        res.status(200);
        res.json({
            status: "success",
            message: "User logged in",
            data: {
                user: {
                    email,
                    fullName,
                },
            },
        });
        // send success
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

// --------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`--------- Server Started on PORT: ${PORT} ---------`);
});
