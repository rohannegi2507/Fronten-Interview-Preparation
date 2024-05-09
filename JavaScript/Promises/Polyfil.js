
const promiseA = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("promise a")
    },200)
})

const promiseB = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("promise b")
    },300)
})

const promiseC = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("promise c")
    },100)
})



function polyfill_all(arr){
    return new Promise((resolve, rej)=>{
      let res = {}
      arr.forEach((item, index)=>{
         item.then((data)=>{
              console.log("each-all", data, index)
              res[index] = data
              if(Object.keys(res).length === arr.length){
                  resolve(Object.values(res))
              }
         }).catch((err)=>{
             rej(err)
         })
      })
    })

}


function polyfill_race(arr){
    return new Promise((resolve, rej)=>{
        let res = {}
      arr.forEach((item, index)=>{
         item.then((data)=>{
              console.log("each-race", data, index)
              res[index] = data
              if(Object.keys(res).length === 1){
                  resolve(Object.values(res))
              }
         }).catch((err)=>{
             resolve(err)
         })
      })
    })

}



polyfill_all([promiseA, promiseB, promiseC]).then((data)=>{
    console.log("final-all",data)
})

polyfill_race([promiseA, promiseB]).then((data)=>{
    console.log("final-race",data)
})

