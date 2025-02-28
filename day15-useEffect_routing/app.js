// ES6 ES Modules
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/dashboard";
import DummyTodos from "./src/pages/dummyTodos";
import HomePage from "./src/pages/homePage";

import { BrowserRouter, Routes, Route } from "react-router";

const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

// REACT is a SINGLE PAGE APPLICATION

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dummy" element={<DummyTodos />} />
            </Routes>
        </BrowserRouter>
    );
};

reactRoot.render(<App />);
