// function sum(a,b){
//     return a+b;
// }
// function multi(a,b){
//     return a*b;
// }
// const container={
//     sum:sum,
//     mul:multi,
// };
// module.exports = container;
console.log("A");
const sum= (a,b) => {
    console.log("E");
    return a+b;
}
console.log("B");
module.exports={
    sum,
};