import React, { useState } from 'react'
import Context from './contextUser'

const initialState = {
    token: null,
    email: null
}
export let alterStateContext = (key, value) => initialState[key] = value

export default function UserContext({ children }){

    const [state, setState] = useState(initialState)
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}