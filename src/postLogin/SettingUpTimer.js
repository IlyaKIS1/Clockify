import React from 'react'

export default function SettingUpTimer(props) {
  return (
    <>

    <div className='text-white flex flex-row w-full justify-center'>
     <div className='flex-1'> <div className='flex justify-center'> <button className='w-full'
     onClick={()=> {
      props.onTimerChange((prevState) => {
        if (prevState.hours === 0) return prevState;

        return {
        ...prevState,
        hours: prevState.hours - 1,
      }})

     }}
     >-</button>  Hours
     <button className='w-full'
      onClick={()=> {
        props.onTimerChange((prevState) => ({
          ...prevState,
          hours: prevState.hours + 1,
        }))
       }}
     >+</button> </div></div>

     <div className='flex-1'> <div className='flex justify-center'>
     <button className='w-full'
     onClick={()=> {
      props.onTimerChange((prevState) => {
        if (prevState.minutes === 0) return prevState;

        return {
        ...prevState,
        minutes: prevState.minutes - 1,
      }})

     }}

     >-</button>  Minutes
     <button className='w-full'
    onClick={()=> {
      props.onTimerChange((prevState) => {
        if (prevState.minutes === 59) return prevState;

        return {
        ...prevState,
        minutes: prevState.minutes + 1,
      }})

     }}

     >+</button> </div></div>
     <div className='flex-1'> <div className='flex justify-center'>
     <button className='w-full'
    onClick={()=> {
      props.onTimerChange((prevState) => {
        if (prevState.seconds === 0) return prevState;

        return {
        ...prevState,
        seconds: prevState.seconds - 1,
      }})

     }}

     >-</button>  Seconds <button className='w-full'
     onClick={()=> {
      props.onTimerChange((prevState) => {
        if (prevState.seconds === 59) return prevState;

        return {
        ...prevState,
        seconds: prevState.seconds + 1,
      }})

     }}

     >+</button> </div></div>
    </div>
    </>
  )
}
