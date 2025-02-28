const http = require("http");

const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}; 

const server = http.createServer(async (req, res) => {
    const path = req.url;
    console.log("-->", path);
    res.setHeader("content-type", "text/html");

    if (path == "/") {
        const products = await getData();
        res.write(`<html>
            <head>
                <style>
                    body{
                        background-color: yellow;
                        padding: 1rem;
                    }
                </style>
            </head>
            <body>`);

        res.write(`
                <h1>
                    Hello
                </h1>`);

      
    } else if (path == "/about") {
        res.end("<h1 style='color: blue'>About Page</h1>");
    } else {
        res.end("<h1 style='color: green'>Oops... Page Not Found!</h1>");
    }
});

server.listen(1010, () => {
    console.log("------ Server Started ------");
});


