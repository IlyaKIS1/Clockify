import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({buttonClicked, accessToken, trackUri, time }) {
  console.log("time is", time)
  console.log("PLAYER")
  const [play, setPlay] = useState(false)
  let autoPlay = false;

  useEffect(() => {
    if (time === 0 && buttonClicked) {
      autoPlay = true;
      setPlay(true)
    }
  }
    , [trackUri])

  if (!accessToken) return null
  return (
    <div className="fixed bottom-0 w-screen">


    <SpotifyPlayer
      token={accessToken}
      autoPlay={true}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
    </div>
  )
}