import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './../../components/Header/Header'
import Input from './../../components/Input/Input'
import { baseApi } from './../../helper/constants'
import { useEffect } from 'react'
import contextUser from './../../components/UserContext/contextUser'
import { alterStateContext } from './../../components/UserContext/UserContext'

export default function Login(){

    const contextAtual = useContext(contextUser)
    const [login, setLogin] = useState({ email: null, senha: null })
    const setValueState = (key, value) => setLogin({ ...login, [key]: value })
    const [loading, setLoading] = useState(false)

    const submitLogin = (event) => {
        event.preventDefault()
        setLoading(true)
        setTimeout(() => {
            alterStateContext("token", "tokenzikahashudozikadoido")
            setLoading(false)
        }, 5000);
    }

    return (
        <div>
            <Header />
            <Link to="/">Home</Link>
            {loading && <h1>Carregando...</h1>}
            <h1>Token: {contextAtual.token}</h1>
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
                        <button onClick={(e) => submitLogin(e)}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}