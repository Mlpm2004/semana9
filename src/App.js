import {useEffect, useState} from "react"
import Reduztexto from './component/reduz';
var reduzido=true
function App() {
  
  const textoInicial="Olá, tudo bem como vai ? Como está a familia ?"
  const maxLength=10
  
  const horaInicial=new Date().toLocaleTimeString()
  const [texto,cutText]= useState(<Reduztexto txt={textoInicial} mxl={maxLength}/>)
  const [botao,changebutton]= useState("AMPLIA")
  const [hora,mudahora]= useState(horaInicial)
  const [dados,setArray]= useState([{nome:"Mauro",cidade:"Floripa",idade:"51",filme:"As tranças do careca"}])
  function mudaTexto(){
      reduzido=!reduzido
      if (reduzido){
          cutText(<Reduztexto txt={textoInicial} mxl={maxLength}/>)
          changebutton("AMPLIA")
      }else{
          changebutton("REDUZ")
          cutText(textoInicial)
      } 
      
  }
  function alteraHora(){
      const novaHora=new Date().toLocaleTimeString()
      mudahora(novaHora)
  }
  
  setInterval(alteraHora,1000)



  return <>
            
            <div><span>{texto}</span><button onClick={mudaTexto} >{botao}</button> </div>
            <div><h1>Hora Certa</h1><h3>{hora}</h3> </div>
            <p>Seu nome : {dados[0].nome}</p>
            <p>Cidade onde reside : {dados[0].cidade}</p>
            <p>Sua idade : {dados[0].idade}</p>
            <p>Filme preferido : {dados[0].filme}</p>
           </>
          
  
}
export default App

