import { useAuthContext } from "../contexts/authContext"
import { useState } from "react";
import { MAGIC_WORD } from "../conts/magicWord";


const Login = () =>{
const {login} = useAuthContext();
const [magicWord,setMagicWord]= useState ('');

function handleInputChange(event){
    setMagicWord(event.target.value)
}

function handleSubmit(event){
    event.preventDefault();
    if(magicWord === MAGIC_WORD){
        login()
    }
}

   return (
       <div>
        <h1>Login</h1>
        <form onSubmit= {handleSubmit}>
            <input type = "text" value={magicWord} onChange={handleInputChange} />
            <button type="submit">Iniciar Sesion</button>
        </form>
       </div>
    )
    }
    
    export {Login}