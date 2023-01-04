import { useState } from 'react';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import dvrst from './images/dvrst.jpg'; // Tell webpack this JS file uses this image

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
    {/*centered content */}
     <div>
      <h1 className='text-8xl font-abc text-white'>00:00</h1>

      {/* div with input*/}
    <div className="flex justify-center flex-col">
    <input
      className='block h-7 py-3 px-2'
      type="search"
      placeholder='Search for an album/song'
    />
    </div>

    </div>

    <br />

    {/* playlist code */}

    <div className='bg-frame w-1/2 flex flex-col rounded-md overflow-scroll mb-3'>

    {/*Picture and song data */}
    <div className='flex justify-between p-4'>

   {/* flex box*/}
    <div className='flex'>
      {/* pic */}
        <div className='hidden md:block overflow-hidden'>
          <img src={dvrst} className="h-12 w-12" />
        </div>

    {/* artist data */}
    <div className='mx-4 flex flex-col justify-center align-center'>

      <h2 className='text-white'>dvrst</h2>
      <h2 className='text-sm text-spotify-gray'>close eyes</h2>

    </div>

    </div>

{/* time of song */}
    <h2 className='text-sm hidden text-spotify-gray md:inline'>15:15</h2>


    </div>


    </div>


{/* playlist code */}

<div className='bg-frame w-1/2 flex flex-col rounded-md overflow-scroll mb-3'>

{/*Picture and song data */}
<div className='flex justify-between p-4'>

{/* flex box*/}
<div className='flex'>
  {/* pic */}
    <div className='hidden md:block overflow-hidden'>
      <img src={dvrst} className="h-12 w-12" />
    </div>

{/* artist data */}
<div className='mx-4 flex flex-col justify-center align-center'>

  <h2 className='text-white'>dvrstRANDOMTEXT</h2>
  <h2 className='text-sm text-spotify-gray'>closeeyesSSSSSS</h2>

</div>

</div>

{/* time of song */}
<h2 className='text-sm hidden text-spotify-gray md:inline'>15:15</h2>


</div>


</div>




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
