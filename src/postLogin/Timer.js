import React, { useEffect, useState } from 'react'

function formatTime(hours, minutes, seconds) {
  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}


export default function Timer(props) {
  const isLoggedIn = props.isLoggedIn;
  const [time, setTime] = useState(1*4* 60*1000);

  useEffect(() => {
    if (!isLoggedIn) return
    setTimeout(() => {
      if (time === 0) return;
      setTime(time - 1000);
    }, 1000)
  }, [time])

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
    <h1 className='text-8xl font-abc text-white m-1'>{getFormattedTime(time)}</h1>
    <button className=" bg-spotify-green text-white w-full h-10 rounded-md">

      <div className="flex justify-center items-center h-full w-full">
      Set the timer

      </div>
      </button>
    </>
  )
}
