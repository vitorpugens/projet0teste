import { useEffect, useState } from 'react'
import {Routes, Link} from 'react-router-dom'
import ExibirPost from './ExibirPost'


const API_BUSCAR = 'https://jsonplaceholder.typicode.com/posts' 


function Listar() {
  const [mensagens, setMensagens] = useState([])
  //Carregamento
  const [isLoading, setLoading] = useState(true)


  useEffect(
    () => {


      const pegarDados = async () => {
        const respostaServidor = await fetch(API_BUSCAR);


        if(respostaServidor.ok){
          const dados = await respostaServidor.json()
          setMensagens(dados)
          setLoading(false) //Dados Carregados
        }
      } 
      pegarDados()


    },
    []
  )


  if(isLoading){
    return (<p> Carregando</p>)
  }




  return (
    <>
      <hr />
      <h1>Mensagens</h1>
      {mensagens.map( (mensagem) => (
          <p>{mensagem.title} <Link to={"/mensagem/" + mensagem.id }>[ver mensagem]</Link> </p>
      ))}
    </>
  )
}


export default Listar
