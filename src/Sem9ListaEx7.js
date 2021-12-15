import {useEffect, useState} from "react"

function Exercicio7() {
  let numero
  const [num,setNumero]= useState(0)
  useEffect(() => {
    testaNum(num)
  }, [num]);
  function testaNum(num){
    if(num<0){
      alert ("O número não pode ser negativo");
      setNumero(0)
    }
    if(num>=20){
      alert ("Número máximo atingido! Resetando…");
      setNumero(0)
    }
  }
  
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
export default Exercicio7