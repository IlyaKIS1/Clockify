import React from 'react'

export default function ButtonTimerStart(props) {
    const isButtonClicked = props.isButtonClicked;
    const buttonColour = props.buttonColour
    const timeObject = props.timeObject
    
    let buttonText = isButtonClicked ? "Stop the timer" : "Start the timer";
  if (timeObject.hours === timeObject.minutes &&
    timeObject.minutes === timeObject.seconds && timeObject.seconds === 0){
      buttonText = "Start the timer"
    }

  return (
    <button
    style={{backgroundColor: buttonColour}}
    className=" bg-spotify-green text-white w-full h-10 rounded-md"
    onClick={() => {
      props.onButtonClick((prevState) => !prevState)
    }}
    >

      <div className="flex justify-center items-center h-full w-full">
      {buttonText}

      </div>
      </button>
  )
}
