import {Navigate, Outlet} from 'react-router-dom';
import { PRIVATE } from './paths';
import {useAuthContext} from '../contexts/authContext'

const PublicRoute = () => {
    const {isAuthenticated} = useAuthContext();
    
    if(isAuthenticated){
        return <Navigate to={PRIVATE} />;
    }

    return(
        <div>
            
            <h1>Hokaaa</h1>
            <Outlet />
        </div>
    );

}

export {PublicRoute}