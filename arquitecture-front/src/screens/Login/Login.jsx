import React from 'react'
import Header from './../../components/Header/Header'
import Input from './../../components/Input/Input'
import { useState } from 'react'
import { baseApi } from './../../helper/constants'

export default function Login(){

    const [login, setLogin] = useState({ email: null, senha: null })
    const setValueState = (key, value) => setLogin({ ...login, [key]: value })

    const submitLogin = () => {
        fetch("http://localhost:5000/tipousuario")   
        .then(resp => console.log(resp))
        .catch(erro => console.log(erro))
    }

    return (
        <div>
            <Header />
            <div style={{ width: "40%" }}>
                <form>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Input 
                            type={"text"} 
                            placeHolder={"Email"} 
                            onChange={(event) => setValueState("email", event.target.value)}    
                        />
                        <Input 
                            type={"password"} 
                            placeHolder={"Senha"}
                            onChange={(event) => setValueState("senha", event.target.value)}    
                        />
                        <button onClick={() => submitLogin()}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}