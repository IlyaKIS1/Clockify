import React from 'react'
import dvrst from '.././images/dvrst.jpg'; // Tell webpack this JS file uses this image

export default function SongFrame(props) {
  return (
    <div className='bg-frame justify-center flex flex-col rounded-md mb-3'>

    {/*Picture and song data */}
    <div className='flex justify-between p-4'>

    {/* flex box*/}
    <div className='flex'>
      {/* pic */}
        <div className='hidden md:block overflow-hidden'>
          <img src={props.image} className="h-12 w-12" />
        </div>

    {/* artist data */}
    <div className='mx-4 flex flex-col justify-center align-center'>

      <h2 className='text-white'>{props.artist}</h2>
      <h2 className='text-sm text-spotify-gray'>{props.title}</h2>

    </div>

    </div>

    {/* time of song */}
    <h2 className='text-sm hidden text-spotify-gray md:inline'>{props.songTime}</h2>

    </div>


    </div>




  )
}
