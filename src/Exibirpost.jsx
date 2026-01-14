import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


function ExibirPost(){
    //no <route> deve ser algo assim 
    // <Route path="/post/:id" element={<ExibirPost />}> 
    const {id} = useParams()
    const API_BUSCAR = 'https://jsonplaceholder.typicode.com/posts/'  + id;






    const [mensagem, setMensagem] = useState(null)//Quando for objetos normalmente iniciamos null
    //Carregamento
    const [isLoading, setLoading] = useState(true)
    const [isErro, setErro] = useState(false)


  //useEffect(funcao, [lista de variaveis ouvir => [] ])
  useEffect(
    () => {


      const pegarDados = async () => {
        const respostaServidor = await fetch(API_BUSCAR);


        if(respostaServidor.ok){
          const dados = await respostaServidor.json()


          //Seta os dados
          setMensagem(dados)
          setLoading(false) //Dados Carregados
        }else{
            setLoading(false)
            setErro(true)
        }
      } 
      pegarDados()


    },
    [id] //id está aqui porque ele muda toda vez
  )


  //Parte visual
  if(isLoading){
    return (<p> Carregando... </p>)
  }




  if(isErro){
    return (<p> Deu problema</p>)
  }


    return(
        <>
            <h1>{mensagem.title}</h1>
            <hr />
            <p>{mensagem.body}</p>
            <Link to={'/mensagem/' + (parseInt(id) + 1)}>Próxima mensagem</Link>


        </>
    )
}
export default ExibirPost
