import {useState} from "react"

function App() {
  const [dados,setArray]= useState([{nome:"Mauro",cidade:"Floripa",idade:"51",filme:"As tranças do careca"}])
  return <>
            <p>Seu nome : {dados[0].nome}</p>
            <p>Cidade onde reside : {dados[0].cidade}</p>
            <p>Sua idade : {dados[0].idade}</p>
            <p>Filme preferido : {dados[0].filme}</p>
        </>
          
  
}
export default App