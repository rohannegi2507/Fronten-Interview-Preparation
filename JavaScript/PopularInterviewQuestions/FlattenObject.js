const obj = {
    A:1,
    B:{
        C:{
            D:2
        }
    },
    E:{
        F:[3,4,5]
    }
}


function flattenObject (data){

    const  generateFlattenObject = (input, parent)=>{
        let result= {}
        Object.keys(input).forEach((key)=>{
            let newParent = parent+key
            let value = input[key]

            if(typeof value === 'object'){
              result[key] = generateFlattenObject(value, newParent + '.')
            }else{
              result[key] = value
            }

         })
         return result
    }

    return generateFlattenObject(data,'')
}

console.log(flattenObject(obj))