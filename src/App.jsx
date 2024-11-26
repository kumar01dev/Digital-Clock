import React,{useState,useEffect} from 'react'

function App() {
  const [hour,setHour]=useState(new Date().getHours());
  const [min,setMin]=useState(new Date().getMinutes());
  const [sec,setSec]=useState(new Date().getSeconds());

  useEffect(()=>{
    const interval=setInterval(()=>{
      setHour(new Date().getHours());
      setMin(new Date().getMinutes());
      setSec(new Date().getSeconds());
    },1000)

    return()=>clearInterval(interval);
  },[hour,min,sec])


  function updateTime(){
    let updatedHour=hour<10?`0${hour}`:hour;
    if(updatedHour>12) updatedHour=hour%12;

    const updatedMin=min<10?`0${min}`:min;
    const updatedSec=sec<10?`0${sec}`:sec;
    const meridiem=updatedHour>=12?'PM':"AM";

    return (`${updatedHour}:${updatedMin}:${updatedSec} ${meridiem}`)
  }
  

  return (
      <div 
        className="h-screen w-screen 
        bg-[url('https://images.pexels.com/photos/18126312/pexels-photo-18126312/free-photo-of-panorama-of-the-wasteland-with-villages-scattered-between-the-hills.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center flex justify-center items-center"
      >
          <div 
            className="h-[17vh] w-[39vw] 
            flex justify-center items-center mb-[8em]
            md:h-[25rem] md:w-[52rem] "
          >
            <p
              className="text-[2rem] font-semibold md:text-[4rem]"
            >
              {updateTime()}
            </p>
          </div>

      </div> 
  )
}

export default App
