import {useState} from "react"

function Exercicio2() {
  const nome= "Mauro"
  const cidade="Floripa"
  const idade="51"
  const [filme,setFilme]= useState("As tranças do careca")
  function mudaFilme(){
       setFilme("Incêndio na Caixa D'agua") 
  }
  return <>
            <p>Seu nome : {nome}</p>
            <p>Cidade onde reside : {cidade}</p>
            <p>Sua idade : {idade}</p>
            <p>Filme preferido : {filme}</p>
            <button onClick={mudaFilme} >Muda Filme</button>
        </>
          
  
}
export default Exercicio2