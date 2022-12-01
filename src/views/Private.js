import { Link } from 'react-router-dom'
import {LOGOUT} from '../routes/paths'

const Private = () =>{

return (
    <>
    <div className='private'>
    <h1>BIENVENIDO</h1>
    <h2>Te encuentras dentro del dashboard</h2>

    <Link to= {LOGOUT}>Cerrar sesion</Link>
    </div>
    </>
)
}

export {Private}