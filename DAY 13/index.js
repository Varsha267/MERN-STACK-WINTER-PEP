// import React from "react";
// import ReactDOM from 'react-dom/client';
// const domRoot = document.getElementById("dom-root");
// const reactRoot = ReactDOM.createRoot(domRoot);
// const App = () => {
//     return{
//         <div>
//         <><h1>My App</h1><p>react</p></>
//         </div>
//     };
// };
// reactRoot.render(App())
import React from "react";
import ReactDOM from 'react-dom/client';

const domRoot = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <p>react</p>
    </div>
  );
};

reactRoot.render(App());
// console.log("React");;

