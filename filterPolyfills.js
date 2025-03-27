
Array.prototype.myFilter=function(cb){
    let temp=[];

    for(i=0; i<this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i]);
    }
    return temp;
}

console.log([4,1,8,9].myFilter((i)=>i>2)); // [ 4, 8, 9 ]
console.log([4,1,8,9].myFilter((i)=>i%2===0)); // [ 4, 8 ]