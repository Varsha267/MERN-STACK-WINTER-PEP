// import React from "react";
// import ReactDOM from "react-dom/client";
// import Dashboard from "./src/pages/dashboard";

// const domElement = document.getElementById("dom-root");
// const reactRoot = ReactDOM.createRoot(domElement);

// const App = () => {
//     return (
//         <>
//             <Dashboard />
//         </>
       
//     );
// };

// reactRoot.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/dashboard";  

const domElement = document.getElementById("dom-root");

if (domElement) {
    const reactRoot = ReactDOM.createRoot(domElement);
    reactRoot.render(<Dashboard />);
} else {
    console.error("Root element not found!");
}
