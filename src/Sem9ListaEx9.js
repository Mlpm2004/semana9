import "./App.css";
import React, { useState,useEffect } from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";
let idpersonagem=1
function App() {
  //const URL_TO_FETCH = 'https://swapi.dev/api/people/1/';
  const URL_TO_FETCH1 ='https://swapi.py4e.com/api/people/'
  // useState
  const [dado,setDado] = useState([])
  const [valor,setValor] = useState([idpersonagem])
  console.log(typeof(valor))  
  // useEffect para alterar título
  // useEffect para alterar personagem
  useEffect(() => { 
      loadData()
  }, [valor])

  const loadData = async () => {
      const url= URL_TO_FETCH1+valor
      const resposta = await fetch(url)
      const dados = await resposta.json(0)
      setDado(dados)
  }
 
  return (
    <div>
      <Header />
      <SeletorPersonagem  valor={parseInt(valor)} onChange={(e) => setValor(e.target.value)} />
      <Personagem
                  nome={dado.name}
                  nascimento={dado.birth_year}
                  genero={dado.gender}
                  peso={dado.mass}
                  altura={dado.height}
                  corOlhos={dado.eye_color}
                  corCabelo={dado.hair_color}
      />
    </div>
  );
}

export default App;


/* Continuando a construção do nosso app, adicione outro estado para controlar o número do id do personagem. 
Inicialize o estado com o valor numérico “1”.
O componente SeletorPersonagem é um componente controlado. Portanto, ele precisa receber o valor do id e a 
função setter para que ele possa alterar esse valor. O argumento recebido no onChange do SeletorPersonagem 
é um evento do React. Você precisa pegar somente o target.value.
Por fim, usando a maneira que achar melhor para concatenar strings, substitua o id “1” da URL pelo valor do 
estado que controla o id do personagem usado no SeletorPersonagem.
Lembre-se de que é necessário adicionar alguma coisa ao useEffect para que ele saiba que precisa ser executado 
novamente toda vez que o id for alterado

Atividade */
