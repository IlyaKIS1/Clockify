import React from 'react'
import getAverageColor from 'get-average-color'

function componentToHex(c) {
  c.toString()
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  console.log(r, g, b)
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

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




export default function SongFrame(props) {

  return (
    <div onClick={() => {
      getAverageColor(props.image).then(rgb => props.onSongPick(props.uri, rgbToHex(rgb.r, rgb.g, rgb.b)) );

    }} className='cursor-pointer bg-frame justify-center flex flex-col rounded-md mb-3'>

    {/*Picture and song data */}
    <div className='flex justify-between p-4'>

    {/* flex box*/}
    <div className='flex'>
      {/* pic */}
        <div className='hidden md:block overflow-hidden'>
          <img alt='album cover' src={props.image} className="h-12 w-12" />
        </div>

    {/* artist data */}
    <div className='mx-4 flex flex-col justify-center align-center'>

      <h2 className='text-white'>{props.artist}</h2>
      <h2 className='text-sm text-spotify-gray'>{props.title}</h2>

    </div>

    </div>

    {/* time of song */}
    <h2 className='text-sm hidden text-spotify-gray md:inline'>{getFormattedTime(props.songTime)}</h2>

    </div>


    </div>




  )
}
