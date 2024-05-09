function* GeneratorFunc (){
   try{
    yield 1
    yield 2
   }catch(e){
    console.log("test")
   }
}

const iterator = GeneratorFunc()
console.log(iterator.return())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())



