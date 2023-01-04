import React from 'react'

export default function Footer(props) {
  console.log(props.colour + " is colour")

  return (
    <div style={{backgroundColor: props.colour}} className='fixed top-0 left-0 font-abc text-white text-xl w-screen'>
        <div className='flex justify-around'>

        <a className='line-through'>About</a>
        <a>Marketplace</a>
        <a>Chart</a>

        </div>
    </div>
  )
}
