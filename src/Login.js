
import ButtonLogIn from './components/ButtonLogIn';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import Timer from './postLogin/Timer';

function Login() {
  return (
    <>
    <Footer colour={"#1DB954"}/>
    <ParticlesLayer colour={"#1DB954"}/>


    {/*main div */}
    <div className="flex justify-center flex-col items-center h-screen">
     <div >
      <Timer isLoggedIn={false}/>
      <ButtonLogIn/>

    </div>

    <br />





    </div>

    </>
  );
}

export default Login;