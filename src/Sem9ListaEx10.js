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
      <Personagem dados={dado}/>
    </div>
  );
}

export default App;


// *************************  index.jsx do Personagem modificado ***************************************

import PropType from "prop-types";
import "./styles.css";

function Personagem({dados}) {
  return (
    <div className="content">
      <div className="card">
        <h2>{dados.name}</h2>
        <hr />
        <div className="person-data">
          <p>
            Ano de nascimento: <span>{dados.birth_year}</span>
          </p>
          <p>
            Sexo: <span>{dados.gender}</span>
          </p>
          <p>
            Peso (kg): <span>{dados.mass}</span>
          </p>
          <p>
            Altura (cm): <span>{dados.height}</span>
          </p>
          <p>
            Cor dos olhos: <span>{dados.eye_color}</span>
          </p>
          <p>
            Cor do cabelo: <span>{dados.hair_color}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Personagem.propTypes = {
  nome: PropType.string,
  nascimento: PropType.string,
  genero: PropType.string,
  peso: PropType.string,
  altura: PropType.string,
  corOlhos: PropType.string,
  corCabelo: PropType.string,
};

export default Personagem;



/* Vamos fazer uma refatoração.

O componente Personagem é um componente, que recebe cada uma das props individualmente. 
Como ele é um componente especialista, e as props que recebemos da API são valores que 
simplesmente exibimos, podemos melhorar um pouco a implementação.
No arquivo App.js, remova todas as props passadas ao componente Personagem. 
Em seguida, adicione uma única prop chamada “dados”, e passe o objeto do personagem inteiro como prop.
Faça as alterações neste componente para trocar as referências às props antigas para este novo objeto 
“dados”, para que o componente volte a renderizar normalmente.
Dica1: você deve ter salvo o retorno da API em um estado, como por exemplo 
const [personagem, setPersonagem] = useState( ). Basta passar o “personagem” como valor da prop “dados”.
Dica2: no arquivo App.js existe um objeto “estado_inicial” que contém os nomes das propriedades que vem 
no objeto resposta da API e foram utilizados nas props da versão original do componente. */
