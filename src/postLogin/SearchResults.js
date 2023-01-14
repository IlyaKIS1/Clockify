import React from 'react'
import SongFrame from './SongFrame'

export default function SearchResults(props) {
  const searchResult = props.searchResult;

  return (
    <div className='overflow-scroll w-1/2 my-2'>

{searchResult && searchResult.map((song) => {
  const image = song.album.images.reduce(
    (smallest, image) => {
      if (image.height > smallest.height) return image
      return smallest
    },
    song.album.images[0]
  )
  return <SongFrame
  key={song.uri}
  uri={song.uri}
  image={image.url}
  onSongPick={props.onSongPick}
  artist={song.artists[0].name}
  title={song.name}
  songTime={song.duration_ms} />
})}

</div>

  );
}
