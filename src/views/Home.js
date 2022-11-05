import {Link} from 'react-router-dom';
import {LOGIN} from '../routes/paths'

const Home = () =>{
    return (
        <>
        <h1>Home</h1>
        <Link to={LOGIN}>Iniciar sesión</Link>
        </>
    )
    }
    
    export {Home}