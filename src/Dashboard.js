import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import dvrst from './images/dvrst.jpg'; // Tell webpack this JS file uses this image
import SearchBar from './postLogin/SearchBar';
import SearchResults from './postLogin/SearchResults';
import Timer from './postLogin/Timer';


function Dashboard(props) {
    const code = props.code;

  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [colour, setColour] = useState("#1DB954");
  const [searchResult, setSearchResult] = useState(null);
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

  const onClickHandler = () => {
    setColour("#D51EC3")
  }

  //login
  useEffect( async () => {

    const result = await axios.post('http://localhost:3001/login', {
    code: code
  })
  setAccessToken(result.body.access_token)
  setRefreshToken(result.body.refresh_token)
  }, [])

  return (
    <>
    <Footer colour={colour}/>
    <ParticlesLayer colour={colour}/>


    {/*main div */}
    <div className="flex justify-center flex-col items-center h-screen">
     <div className='mt-36'>
     <button onClick={onClickHandler}>press to change</button>
      <Timer/>
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
  console.log(image.url)
  return <SearchResults image={image.url} artist={song.artists[0].name} title={song.name} songTime={song.duration_ms} />
})}
<SearchResults artist={"Dvrst"} title={'close eyes'} songTime={"15:15"}/>

<SearchResults artist={"DvrstRANDOMMMMMMMMM"} title={'close eyesSSSSSSSSSSSSS'} songTime={"15:15"}/>

</div>




    </div>

    </>
  );
}

export default Dashboard;