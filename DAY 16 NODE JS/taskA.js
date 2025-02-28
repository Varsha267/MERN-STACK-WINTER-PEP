// const box= require("./teamB.js");
const {sum}= require("./teamB.js");//desturecture. no need of use box again and again
// const ans=box.sum(10,20);
// console.log(ans);
// const ans1=box.mul(10,20);
// console.log(ans1);
const sumArray=(arr) => {
    let total=0;
    for(let i=0;i<arr.length;i++){
        total=sum(total,arr[i]);
    }
    return total;
};
module.exports = {
    sumArray,
}