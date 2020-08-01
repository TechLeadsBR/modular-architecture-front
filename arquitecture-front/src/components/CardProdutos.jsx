import React from 'react'

export default function CardProdutos(props){
  return (
    <div>
      <h1 style={styles} >{props.nome}</h1>
      <p>{props.preco}</p>
    </div>
  )
}

const styles = {
  backgroundColor: "black",
  color: "white"
}