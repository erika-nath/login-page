import { useEffect } from "react";
import { useAuthContext } from "../contexts/authContext";

const Logout = () =>{
    const {logout}= useAuthContext();
    useEffect(()=> logout())
    return null;
    }
    
    export {Logout}