import { useState } from "react"


function CriarPost(){
    const [mensagem, setMensagem]  = useState("")


    const chamarAPI = () =>{
        let objetoRequisicao = {
            method: "POST",
            headers: {
                'Content-Type'
            }
        } 
    }


    return <>
        <textarea 
            value={mensagem} 
        onChange={(e) => setMensagem(e.target.value)}
        />


        <button onClick={chamarAPI}>Melhorar post</button>
    </>
}
export default CriarPost
