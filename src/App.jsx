import { useEffect, useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import ExibirPost from './ExibirPost'
import Listar from './Listar'
import CriarPost from './CriarPost'


function App() {
  

  return (
    <>
    <hr/>
    
      <Link to={"/"}>Home</Link> | 
      <Link to="/criarPost">Criar post</Link>


    <hr/>


      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/criarPost" element={<CriarPost />} />


        {/* Poderia ter várias rotas  
        <Route path="/contato" element={<Contato />} />
        <Route path="/adicionar-post/novidades" element={<AdicionarPost />} /> */}


        <Route path="/mensagem/:id" element={<ExibirPost />} />
      </Routes>


    </>
  )
}


export default App
