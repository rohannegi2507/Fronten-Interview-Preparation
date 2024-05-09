function closuer(){
    for(let i =0 ;i <4;i++){
        setTimeout(()=>{
            console.log("testing", i)
        }, i*100)
    }
}

closuer()