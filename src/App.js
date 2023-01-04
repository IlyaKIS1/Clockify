import { useState } from 'react';
import ButtonLogIn from './components/ButtonLogIn';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import dvrst from './images/dvrst.jpg'; // Tell webpack this JS file uses this image
import SearchBar from './postLogin/SearchBar';
import SearchResults from './postLogin/SearchResults';
import Timer from './postLogin/Timer';

function App() {
  const [colour, setColour] = useState("#1DB954");



  const onClickHandler = () => {
    setColour("#D51EC3")
  }

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
      <SearchBar />

    </div>

    <br />


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
