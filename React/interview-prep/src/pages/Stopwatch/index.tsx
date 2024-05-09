import React, {useState, useEffect} from 'react'
import  './index.scss'

const Stopwatch = () => {

    const [timer, setTimer] = useState(0)
    const [displayTime, setDisplayTime] = useState('')
    const [hasStarted, setHasStarted] = useState(false)
    const [isPlay, setPlay] = useState(false)
    const [timeCounter, setTimeCounter] = useState(0)
  
    const handlePlayPause = ()=>{
      if(!isPlay){
       clearInterval(timer)
      }else {
        initiatTime()
      }
    clearInterval(timer)
      setPlay(!isPlay)
    }

    function initiatTime (){
      const time:number = setInterval(function(){
        setTimeCounter(prevSS => prevSS + 1)   
      },1000)
      setTimer(time)
    }
  
    const handleStart = ()=>{
      initiatTime()
      setHasStarted(true)
    }
    
    const handleReset = ()=>{
      setTimeCounter(0)
      clearInterval(timer)
      setHasStarted(false)
    }
  
    useEffect(()=>{
      const secsCount = 60
      const appendZero = (str:string)=>{
        return str.length === 1  ? '0' + str : str
      }

      let ss = timeCounter >= secsCount  ?  (timeCounter % secsCount).toString() : timeCounter ? timeCounter.toString() : '00'
      
      let mm =timeCounter / secsCount  ? parseInt(timeCounter/secsCount).toString() : '00'
      let hh =timeCounter / secsCount*secsCount ? parseInt(timeCounter /(secsCount*secsCount)).toString() : '00'


      setDisplayTime( appendZero(hh) + ':' +appendZero(mm) + ':' + appendZero(ss))
    }, [timeCounter])
  
    return <div className="stopwatch">
        <div className='block'>    <div className='display-time'>{displayTime}</div> 
     <div className="actions">
     {!hasStarted && (<button className="btn start" onClick={handleStart}> Start</button>)}
     { hasStarted && ( <button className="btn resume" onClick={handlePlayPause}> {isPlay ? 'Resume' : 'Pause'}</button>)}
     {hasStarted && (<button className="btn reset" onClick={handleReset}> Reset</button>)}
     </div>
     </div>

      
    </div>;
}

export default Stopwatch
