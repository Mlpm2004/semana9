import {useEffect, useState} from "react"
let estado=false
function Exercicio4() {
  
  const [aceso,setAceso]= useState(estado)
  function toggler(){
      estado=!estado
      setAceso(estado)
  }
  return <>
            <div
                style={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: aceso ? "#ffee00" : "#000",
                }}
              >
                <button onClick={toggler}>Mudar</button>
</div>
            </>
}
export default Exercicio4