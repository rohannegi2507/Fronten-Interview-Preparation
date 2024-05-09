function createSetIntervalPoly(){
   var timeID =  0
   var timeMap = {}
    function setIntervalPoly(callback,delay){
      const id = timeID++
      timeMap[id] = true
      let start = Date.now()
      function triggerCallback(){
        if(!timeMap[id]) return
         if(Date.now() > start + delay){
            start =  Date.now()
            callback.apply(this)
            requestIdleCallback(triggerCallback)
         }else{
            requestIdleCallback(triggerCallback)
         }
      }
      requestIdleCallback(triggerCallback)
      return id
    }

    function clearTimeIntervalPoly(id){
        delete timeMap[id]
    }


    return {setIntervalPoly, clearTimeIntervalPoly}
}

const {setIntervalPoly, clearTimeIntervalPoly}  = createSetIntervalPoly()

const id = setIntervalPoly(()=>{
   console.log("SET TIMEOUT")
}, 1000)


setTimeout(()=>{
   clearTimeIntervalPoly(id)
}, 5100)