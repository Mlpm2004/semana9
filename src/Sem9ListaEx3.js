import {useEffect, useState} from "react"
function Exercicio3() {
  const horaInicial=new Date().toLocaleTimeString()
  const [hora,mudahora]= useState(horaInicial)
  function alteraHora(){
      const novaHora=new Date().toLocaleTimeString()
      mudahora(novaHora)
  }
  setInterval(alteraHora,1000)
  return <>
            <div><h1>Hora Certa</h1><h3>{hora}</h3> </div>
            </>
}
export default Exercicio3