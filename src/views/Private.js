import { Link } from 'react-router-dom'
import {LOGOUT} from '../routes/paths'

const Private = () =>{

return (
    <>
    <h1>Hola private</h1>
    <Link to= {LOGOUT}>Cerrar sesion</Link>
    </>
)
}

export {Private}