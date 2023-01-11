import React, { useEffect, useState } from 'react'
import SettingUpTimer from './SettingUpTimer';

function formatTime(hours, minutes, seconds) {
  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}


export default function Timer(props) {
  const isLoggedIn = props.isLoggedIn;
  const [timeObject, setTimeObject] = useState({hours:0, minutes:1, seconds:3})

  useEffect(() => {
    if (!isLoggedIn) return
    const timeoutId = setTimeout(() => {
      let time = (timeObject.hours * 60 * 60
        + timeObject.minutes * 60 + timeObject.seconds) * 1000;
      props.setTimeCurrently(time);
      if (time === 0) return;
      else if (timeObject.seconds === 0 &&
        timeObject.minutes === 0
        ) setTimeObject((prevState) => ({
          hours: prevState.hours - 1,
          minutes: 59,
          seconds: 59
        }))
      else if (timeObject.seconds === 0){
        setTimeObject((prevState) => ({
          ...prevState,
          minutes: prevState.minutes - 1,
          seconds:59
        }))
      }
      else {
        setTimeObject((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }))
      }
    }, 1000)

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeObject.seconds, timeObject.minutes, timeObject.hours])

  if (!isLoggedIn) return (
    <h1 className='text-8xl font-abc text-white m-1'>00:00</h1>
  )



  const getFormattedTime = (miliseconds) => {
    let total_seconds = parseInt(Math.floor(miliseconds/1000));
    let total_minutes = parseInt(Math.floor(total_seconds/60));
    let total_hours = parseInt(Math.floor(total_minutes/60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    return formatTime(hours, minutes, seconds)

  };

  return (
    <>
    <h1 className='text-8xl font-abc text-white m-1'>{getFormattedTime((timeObject.hours * 60 * 60
        + timeObject.minutes * 60 + timeObject.seconds) * 1000)}</h1>
    <SettingUpTimer onTimerChange={setTimeObject}/>
    <button className=" bg-spotify-green text-white w-full h-10 rounded-md">

      <div className="flex justify-center items-center h-full w-full">
      Set the timer

      </div>
      </button>
    </>
  )
}
