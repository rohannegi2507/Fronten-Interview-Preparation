function pollyApply(object, ...args){
  let func = this
  func()

}


function polyBind(obj, ...args1){
   let func = this
    return function(...args2){

        return func.apply(obj,[...args1, ...args2])
    }
}

Function.prototype.pollyBind = polyBind


let data = {
    name:'rohan'
}

function getName(age, place){
    return this.name + ' age:' + age + ' place:' +place
}

const bind = getName.pollyBind(data, 34)
console.log(bind('kotdwar'))
