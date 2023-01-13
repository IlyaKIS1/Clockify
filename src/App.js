import Dashboard from './Dashboard';
import Login from './Login';


const code = new URLSearchParams(window.location.search).get("code")

function App() {
  if (code){
    return <Dashboard code={code} />
  } else {
    return <Login />
  }

}

export default App;
