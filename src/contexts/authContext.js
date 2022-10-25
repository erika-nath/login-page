import { useMemo } from "react";
import { createContext,useCallback,useState } from "react";


import { createContext, useState } from "react";

const MY_AUTH_APP = 'MY_AUTH_APP_1';

const AuthContext =({children})=>{
    const [isAuthenticated,setIsAuthenticated]= useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);
    setIsAuthenticated(true);

    const login =  useCallback(function(){
        window.localStorage.setItem(MY_AUTH_APP,true);
        setIsAuthenticated(true)
    },[]);

    const logout =  useCallback(function(){
        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false)
    },[])
}

const value = useMemo(()=>
({
    
        login,
        logout,
        isAuthenticated
    
}),[login,logout,isAuthenticated])

export {AuthContext}