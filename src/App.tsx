import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}

type UsuarioType = {
  id:number,
  nome:string,
  email:string,
  created_at:string,
  updated_at:string
}   

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuario] = useState<UsuarioType[]>([])
  useEffect(()=>{
    fetch("https://one022b-marketplace-cegf.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])

  useEffect(()=>{
    fetch("https://one022b-marketplace-cegf.onrender.com/usuario")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuario(dados))
  },[])

  return (
    <>
    <div className="container-produtos">
    {produtos.map(prod=>{
      return(
        <div  key={prod.id} className='produto-item'>
          <h1>{prod.nome}</h1>
          <p>{prod.imagem}</p>
          <p>{prod.preco}</p>
          <p>{prod.descricao}</p>
        </div>
      )
    })}
    </div>
     <div className="container-usuario">
     {usuarios.map(usu=>{
      return(
        <div  key={usu.id} className='usuario-item'>
          <h1>{usu.nome}</h1>
          <p>{usu.email}</p>
          <p>{usu.created_at}</p>
          <p>{usu.updated_at}</p>
        </div>
      )
    })}
     </div>
    </>
  )
}

export default App
