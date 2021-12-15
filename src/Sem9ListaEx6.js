import {useEffect, useState} from "react"

function Exercicio6() {
  let numero
  const [num,setNumero]= useState(0)
  return <>
            <div
                style={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <button onClick={()=>setNumero((numero)=>numero-1)}>-</button><label style={{padding:"5px"}}>O número atual é: {num}</label><button onClick={()=>setNumero((numero)=>numero+1)}>+</button>
            </div>
            </>
}
export default Exercicio6