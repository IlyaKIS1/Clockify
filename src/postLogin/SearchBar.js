import React from 'react'

export default function SearchBar() {
  return (
    <div className="flex justify-center flex-col">
    <input
      className='block h-7 py-3 px-2'
      type="search"
      placeholder='Search for an album/song'
    />
    </div>
  )
}
