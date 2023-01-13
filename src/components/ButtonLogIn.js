import React from 'react'
import logo from '.././images/Spotify-Icon-White-Logo.wine.svg';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4a0c5ad7c97644a8a43e7bbab5849ff7&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read";


export default function ButtonLogIn() {
    const onClickHandler = () => {
        window.location=AUTH_URL;
      }

  return (
    <button onClick={onClickHandler}  className=" bg-spotify-green text-white w-full h-10 rounded-md">
      <div className="flex justify-center h-full w-full">
      <img src={logo} className=" h-10  inline"/>

      <div className="flex align-center h-full w-full">
      <h1 className='inline text-base p-1.5'>Log in with Spotify</h1>

      </div>
      </div>
      </button>
  )
}
