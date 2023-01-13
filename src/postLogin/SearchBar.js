import React from 'react'

export default function SearchBar(props) {
  return (
    <div className="flex justify-center flex-col m-1 border-0">
    <input
      className='block h-7 py-3 px-2'
      type="search"
      placeholder='Search for an album/song'
      onChange={props.onChange}
    />
    </div>
  )
}
