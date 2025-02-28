console.log(React);
console.log(ReactDOM);
// const parent =document.getElementById("dom-root");
// const root= ReactDom.createRoot(parent);
// const newtittle=React.createElement("h2",{},"hello real react");
// root.render(newtittle);
// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);
// const newTitle = React.createElement("h2", {}, "Hello Real React");
// root.render(newTitle);
// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const newTitle = React.createElement("h2", {}, "Hello from REAL React!");
// const newPara = React.createElement("p", {}, "Lorem ipsum delor..."); 
// const li1= React.createElement("li",{},"item1");
// const li2= React.createElement("li",{},"item2");
// const li3= React.createElement("li",{},"item3");
// const container = React.createElement("div", {}, [newTitle, newPara,li1,li2,li3]); 

// root.render(container);
// const creator=(name,value)=>{
//     const res={
//         studentName:name,
//         des=value
//     }
// }
const parent =document.getElementById("dom-root");
const root= ReactDom.createRoot(parent);
const tittle= (<h2 class= "text-style-type-1" id="somthing" tittle="company name">hello from react</h2>);