import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({buttonClicked, accessToken, trackUri, time }) {
  console.log("time is", time)
  console.log("PLAYER")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (buttonClicked && time === 0) {
      console.log("START")
      setPlay(true)
    } else {
      console.log("STOP")
      setPlay(false)
    }
  }
    , [trackUri, time, buttonClicked])

  if (!accessToken) return null
  return (
    <div className="fixed bottom-0 w-screen">


    <SpotifyPlayer
      token={accessToken}
      autoPlay={true}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
        if (state.isPlaying) setPlay(true)
        if (time !== 0) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
    </div>
  )
}