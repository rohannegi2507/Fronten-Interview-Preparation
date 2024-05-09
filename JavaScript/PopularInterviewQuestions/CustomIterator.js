function generateIterator (arr){
    let index = 0
   return {
    next:function(){
        if(index >= arr.length){
            return null
        }
        return arr[index++]
    },
    done:function(){
        return index >= (arr.length-1)
    }
   }
}
const arr = [1,2,3]
const iterator = generateIterator(arr)

console.log(iterator.next())
console.log(iterator.done())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.done())