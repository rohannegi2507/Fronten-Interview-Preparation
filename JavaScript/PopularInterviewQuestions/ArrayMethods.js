// @param callbackfn — A function that accepts up to four arguments. 
// The reduce method calls the callbackfn function one time for each element in the array.
//  (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number)
// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation.
// The first call to the callbackfn function provides this value as an argument instead of an array value.
function myReducer (callback, initialValue){
  // base condition
  if(this.length === 0 ){
    return typeof initialValue !== 'undefined' ? initialValue : new Error("Reduce of empty array with no initial value")
  }

  let accumulate = typeof initialValue !== 'undefined' ? initialValue : this[0]
  let arr = [...this]
  
  if(typeof initialValue === 'undefined'){
     arr = this.slice(1, this.length)
  }
  arr.forEach((element, index) => {
      accumulate = callback(accumulate,element,index,this)
  });

  return accumulate
}

 //let startValue = typeof initialValue !== 'undefined' ? initialValue : this.


Array.prototype.myReducer = myReducer


const arr = [1,2,3,4]

// arr.myReducer((previousValue, currentValue, )=>{

// },0)


console.log(arr.reduce((a,b,c,d)=>{
    console.log(a,b,c,d)
    return a+b
}))

console.log(arr.myReducer((a,b,c,d)=>{
    console.log(a,b,c,d)
    return a + b 
}))