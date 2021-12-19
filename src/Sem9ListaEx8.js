import "./App.css";
import React, { usestate,useEffect } from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";
function App() {
  //const URL_TO_FETCH = 'https://swapi.dev/api/people/1/';
  const URL_TO_FETCH1 ='https://swapi.py4e.com/api/people/1/'
  // useState
  const [dado,setDado] = React.useState([])
    
  // useEffect para alterar título
  // useEffect para alterar personagem
  useEffect(() => { 
      loadData()
  }, [])

  const loadData = async () => {
      const resposta = await fetch(URL_TO_FETCH1)
      const dados = await resposta.json(0)
      setDado(dados)
  }
 
  return (
    <div>
      <Header />
      <SeletorPersonagem  valor={0} onChange={(e) => setDado(e.target.value)} />
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
