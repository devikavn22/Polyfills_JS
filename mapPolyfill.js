
// Array.prototype.map((num,i,arr)=>{});

Array.prototype.myMap=function(cb){
    let temp=[];

    for(let i=0;i<this.length; i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
};

// console.log([2,1,8].map((i)=>i*i)); [ 4, 1, 64 ]
console.log([2,1,8].myMap((i)=>i*i)); // [ 4, 1, 64 ]
