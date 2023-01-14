import axios from 'axios';
import { useState } from 'react';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import useLogin from './hooks/useLogin';
import Player from './postLogin/Player';
import SearchBar from './postLogin/SearchBar';
import SearchResults from './postLogin/SearchResults';
import Timer from './postLogin/Timer';

//This component can be treated as the global storage of the app
function Dashboard(props) {
    const code = props.code;

  const accessToken = useLogin(code);

  //default green
  const [colour, setColour] = useState("#1DB954");
  const [isButtonClicked, setIsButtonClicked]= useState(false);

  //set to 5 seconds, so that app does not start with the player on
  const [timeCurrently, setTimeCurrently] = useState(5000);
  const [searchResult, setSearchResult] = useState(null);
  const [currentSongUri, setCurrentSongUri] = useState(null);

  //when needed song is clicked
  const onSongPick = (songUri, albumColour) => {
    setColour(albumColour);
    setCurrentSongUri(songUri);
  }

  //when changing word in the form. As we change, new set of songs appears
const onChangeHandler = async (e) => {
  if (!e.target.value) return;

  const res = await axios.post('http://localhost:3001/search', {
    songName: e.target.value
  })

  const songs = res.data.body.tracks.items;
  setSearchResult(songs)
}



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

    <SearchResults
      searchResult={searchResult}
      onSongPick={onSongPick}
    />

    </div>
    {/*4 seconds is the delay time*/}
    {timeCurrently < 4000 && <Player
  accessToken={accessToken}
  trackUri={currentSongUri}
  time={timeCurrently}
  buttonClicked={isButtonClicked}
  />}
    </>
  );
}

export default Dashboard;