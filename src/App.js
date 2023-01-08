import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonLogIn from './components/ButtonLogIn';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import dvrst from './images/dvrst.jpg'; // Tell webpack this JS file uses this image
import SearchBar from './postLogin/SearchBar';
import SearchResults from './postLogin/SearchResults';
import Timer from './postLogin/Timer';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  const [colour, setColour] = useState("#1DB954");
  const [searchResult, setSearchResult] = useState(null);
  //console.log(searchResult)

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

  useEffect(() => {
    if (!code) return;
    console.log(code)
    axios.post('http://localhost:3001/login', {
    code: code
  })
  }, [code])

  return (
    <>
    <Footer colour={colour}/>
    <ParticlesLayer colour={colour}/>


    {/*main div */}
    <div className="flex justify-center flex-col items-center h-screen">
    <button onClick={onClickHandler}>press to change</button>
     <div>

      <Timer />
      <ButtonLogIn />
      <SearchBar onChange={onChangeHandler}/>

    </div>

    <br />

{searchResult && searchResult.map((song) => {
  const image = song.album.images.reduce(
    (smallest, image) => {
      if (image.height < smallest.height) return image
      return smallest
    },
    song.album.images[0]
  )
  console.log(image.url)
  return <SearchResults image={image.url} artist={song.artists[0].name} title={song.name} songTime={song.duration_ms} />
})}
<SearchResults artist={"Dvrst"} title={'close eyes'} songTime={"15:15"}/>

<SearchResults artist={"DvrstRANDOMMMMMMMMM"} title={'close eyesSSSSSSSSSSSSS'} songTime={"15:15"}/>






      {/* div with songs*/}
   {/* <div className='bg-spotify-green'>
    <br></br>

    <div className='flex items-start py-4'>
        <div className=''>
          <img src={dvrst} className="object-fill h-12 w-12" />
        </div>


    <div className='mx-4'>
    <h2>
jkfdsjhfsdjhfdshjdsfjhfdshjfdshjfsdjh
    </h2>
      <h2>fdfdfddzfdgfgdgfd</h2>
    </div>

    </div>



    </div> */}







    </div>

    </>
  );
}

export default App;
