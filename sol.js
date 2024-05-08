//type conversion
//boolean conversion
//const p=5;
// if (p){
//     console.log("p is great");
// }
//console.log(Boolean (1));
//falsy values include=0,emmpty array{},empty object({}),false,null,undefined
//truthy values=all numbers except 0,any string,array containing data

//array filter method
// const num=[1,2,3,4,5,6];
// const even=num.filter((item)=> item%2===0);

// console.log(even);

//solution
const arr=[0,10,20,30];
const arr1=[1,2,3];
const arr2=[-2,-1,0,1,2];

function greaterThan10(n){
    return n>10;
}
function firstindex(n,i){
    return i===0;
}
function plusone(n){
    return n+1;
}
const filter=function(arr,fn){
    const filteredArr=[]
   for(let i=0;i<arr.length;i++){
    if(fn(arr[i],i)){
    filteredArr.push(arr[i]);
    }
   }
return filteredArr;
};
console.log(filter(arr,greaterThan10));
console.log(filter(arr1,firstindex));
console.log(filter(arr2, plusone));