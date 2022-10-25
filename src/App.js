import './App.css';
import {LOGIN,LOGOUT,PRIVATE} from './routes/paths'
import {Route, Routes} from 'react-router-dom'
import {Login} from './views/Login'
import {Logout} from './views/Logout'
import {Private} from './views/Private'

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search</h1>

function App() {
  return (
    <div className="App">
      
      <Routes>
<Route path={LOGIN} element={<Login />}/>
<Route path={PRIVATE} element={<Private />}/>
<Route path={LOGOUT} element={<Logout />}/>

      </Routes>
    </div>
  );
}

export default App;
