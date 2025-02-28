import React from "react";
import ReactDOM from 'react-dom/client';
import Task from './pages/task';
const domRoot = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return (
      <div>
        <h1>My App</h1>
        <p>react</p>
        <Task></Task>
      </div>
    );
  };
  reactRoot.render(App());