function throttle(cb, delay){
    let shouldWait = false

    return function(...args){
        if(shouldWait) return
        cb(...args)
        shouldWait = true
        setTimeout(()=>{
            shouldWait = false 
        },delay)
    }
}