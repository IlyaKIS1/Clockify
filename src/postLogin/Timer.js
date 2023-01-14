import React, { useEffect, useState } from 'react'
import useTime from '../hooks/useTime';
import ButtonTimerStart from './ButtonTimerStart';
import SettingUpTimer from './SettingUpTimer';

function formatTime(hours, minutes, seconds) {
  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

function getFormattedTime(miliseconds) {
  let total_seconds = parseInt(Math.floor(miliseconds/1000));
  let total_minutes = parseInt(Math.floor(total_seconds/60));
  let total_hours = parseInt(Math.floor(total_minutes/60));

  let seconds = parseInt(total_seconds % 60);
  let minutes = parseInt(total_minutes % 60);
  let hours = parseInt(total_hours % 24);
  return formatTime(hours, minutes, seconds)

};


export default function Timer(props) {
  const isLoggedIn = props.isLoggedIn;
  const isButtonClicked = props.isButtonClicked;
  const buttonColour = props.buttonColour;
  const [timeObject, setTimeObject] = useTime({hours:0, minutes:0, seconds:0},
    isLoggedIn,
    isButtonClicked,
    props.setTimeCurrently
    )

  if (!isLoggedIn) return (
    <h1 className='text-8xl font-abc text-white m-1'>00:00</h1>
  )

  return (
    <>
    <h1 className='text-8xl font-abc text-white m-1'>{getFormattedTime((timeObject.hours * 60 * 60
        + timeObject.minutes * 60 + timeObject.seconds) * 1000)}</h1>
    <SettingUpTimer onTimerChange={setTimeObject}/>
    <ButtonTimerStart
      onButtonClick = {props.onButtonClick}
      isButtonClicked={isButtonClicked}
      timeObject={timeObject}
      buttonColour={buttonColour}
    />

    </>
  )
}
