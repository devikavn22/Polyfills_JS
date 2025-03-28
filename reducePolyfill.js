
// Polyfill for reduce function:

// arr.reduce((acc,currentVal,index,arr)=>{},initialValue);

Array.prototype.myReduce=function(cb,initialValue){
    // initialize the accumulator with initialValue
    var accumulator=initialValue;

    for(i=0; i<this.length; i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this): this[i];
    }
    return accumulator;
}

// console.log([3,6,9,1].reduce((acc,current,i,arr)=>{
//     return acc+current;
// },0)); // 19

// console.log([3,6,9,1].myReduce((acc,current,i,arr)=>{
//     return acc+current;
// },0)); // 19

console.log([3,6,9,1].myReduce((acc,current,i,arr)=>{
    return acc+current;
},1)); // 20

