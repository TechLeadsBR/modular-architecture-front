import React, { useState }from 'react'
import CardProdutos from './../../components/CardProdutos/CardProdutos'
import { somarValores } from './../../helper/functions'
import { Link } from 'react-router-dom'
import Header from './../../components/Header/Header'

export default function Produtos(){

  const produtosArray = [
    {id: 1, nome: 'Cenoura', preco: 5.00},
    {id: 2, nome: 'Batata', preco: 8.90},
    {id: 3, nome: 'Alface', preco: 2.50},
    {id: 4, nome: 'Gengibre', preco: 2.00},
    {id: 5, nome: 'Tomate', preco: 4.19}
  ]

  const [produtos, setProdutos] = useState(produtosArray)

  return (
    <div>
      <Header />
      <h1>Produtos</h1>
      {
        produtos.map((p, i) => <CardProdutos key={i} nome={p.nome} preco={p.preco} /> )
      }
      <h2>Soma total: {somarValores(produtosArray.map((p) => p.preco))}</h2>
      <h2><Link to="/">Home</Link></h2>
    </div>
  )
}