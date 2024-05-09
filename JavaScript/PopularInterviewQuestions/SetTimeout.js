// Trick to remember
// Date.now()
// requestIdleCallback
// timeMap
// recursive call
// The window.requestIdleCallback() method queues a function to be called during a browser's idle periods.

function createSetTimeout(){
   var timeID = 0
   var timeMap = {}


   function setTimeoutPolly(callback,delay,...args){
    const id = timeID++
    timeMap[id] = true
    const start = Date.now()
     function triggerCallback(){
        if(!timeMap[id]) return
        
        if(Date.now() >  start + delay){
            callback.apply(this,args)
        }else{
            requestIdleCallback(triggerCallback)
        }
     }
     requestIdleCallback(triggerCallback)
     return id
   }

   function clearTimeoutPoly(id){
    delete timeMap[id]
   }

   return {setTimeoutPolly, clearTimeoutPoly}
}

const {setTimeoutPolly, clearTimeoutPoly} =  createSetTimeout() 

console.log("Start")
const timerID = setTimeoutPolly((name)=>{
   console.log("TIMER", name)
}, 4000, "test")
//clearTimeoutPoly(timerID)
console.log("End ")

