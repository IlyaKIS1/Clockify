import React from 'react'
import SongFrame from './SongFrame'

export default function SearchResults(props) {
  return (
    <div className='bg-frame w-1/2 flex flex-col rounded-md overflow-scroll mb-3'>
        <SongFrame image={props.image} artist={props.artist} title={props.title} songTime={props.songTime}/>
    </div>
  )
}
