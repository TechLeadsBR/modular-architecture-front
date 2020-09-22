import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <div style={{ 
            color: "white", 
            backgroundColor: "#000000", 
            height: "40px", 
            width: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center" }}
        >
            <Link to="/login" style={{ color: "white" }} >Login</Link>
        </div>
    )
}