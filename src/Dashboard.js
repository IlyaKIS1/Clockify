import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import Player from './postLogin/Player';
import SearchBar from './postLogin/SearchBar';
import SearchResults from './postLogin/SearchResults';
import SettingUpTimer from './postLogin/SettingUpTimer';
import SongFrame from './postLogin/SongFrame';
import Timer from './postLogin/Timer';


function Dashboard(props) {
    const code = props.code;

  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [colour, setColour] = useState("#1DB954");
  const [isButtonClicked, setIsButtonClicked]= useState(false);
  const [timeCurrently, setTimeCurrently] = useState(1*4* 60*1000);
  const [searchResult, setSearchResult] = useState(null);
  const [currentSongUri, setCurrentSongUri] = useState(null);

  const onSongPick = (songUri, albumColour) => {
    setColour(albumColour)
    setCurrentSongUri(songUri);
  }
  //console.log(searchResult)

  //search
const onChangeHandler = async (e) => {
  if (!e.target.value) return;

  const res = await axios.post('http://localhost:3001/search', {
    songName: e.target.value
  })

  const songs = res.data.body.tracks.items;
  setSearchResult(songs)
}

  //login
  useEffect( () => {
    axios.post('http://localhost:3001/login', {
        code: code
    }).then((result) => {
      const bodyTokens = result.data.body;
        setAccessToken(bodyTokens.access_token);
  setRefreshToken(bodyTokens.refresh_token);
    })
    }, [])

  return (
    <>
    <Footer colour={colour}/>
    <ParticlesLayer colour={colour}/>


    {/*main div */}
    <div className="flex justify-center flex-col items-center h-screen">
     <div className='mt-36'>
      <Timer
      isLoggedIn={true}
      setTimeCurrently={setTimeCurrently}
      buttonColour={colour}
      isButtonClicked={isButtonClicked}
      onButtonClick={setIsButtonClicked}
      />

      <SearchBar onChange={onChangeHandler}/>

    </div>

    <br />

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
  onSongPick={onSongPick}
  artist={song.artists[0].name}
  title={song.name}
  songTime={song.duration_ms} />
})}

</div>




    </div>
    {!timeCurrently && <Player
  accessToken={accessToken}
  trackUri={currentSongUri}
  time={timeCurrently}
  buttonClicked={isButtonClicked}
  />}
    </>
  );
}

export default Dashboard;