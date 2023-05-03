import { useState, useEffect } from 'react';

function useTime(time, isLoggedIn, isButtonClicked, callbackToSaveTime) {
    const [timeObject, setTimeObject] = useState(time)

    useEffect(() => {
      if (!isLoggedIn) return
      if (!isButtonClicked) return
      const timeoutId = setTimeout(() => {
        let time = (timeObject.hours * 60 * 60
          + timeObject.minutes * 60 + timeObject.seconds) * 1000;
          callbackToSaveTime(time);
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
    }, [timeObject.seconds,
      timeObject.minutes,
      timeObject.hours,
      isButtonClicked,
      callbackToSaveTime,
      isLoggedIn
    ])

  return [timeObject, setTimeObject];
}
export default useTime