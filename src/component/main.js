import React, { useState } from "react";
import styled from "styled-components";
import ModalMenu from "./modal";

const Conteiner = styled.main`
display: grid;
place-items: center;
background-color: #F5DEB3;
height: 100vh;
button{
  width: 2.5vw;
  height: 2.3vw;
  text-align: center;
  background-color: #A52A2A;
  box-sizing: border-box;
  border-radius: 40%;
  font-size: 0.8vw;
  border: solid black 2px;
  cursor: pointer;
  &:hover{
    animation: vibrate 800ms ease-in-out;
    animation-iteration-count: 7;
  }

  @keyframes vibrate {
    0%{
      transform:rotate(7deg);
    }
    100%{
      transform:rotate(0deg);
    }
  }

}
ul{
  border: solid lightgray;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  width: 20vw;
  height: 16vw;
  list-style: none;
  display: grid;
  place-items: center;
  background-color: #F5F5DC;
  ;
}

`
const Titulo = styled.div`
width: 90vw;
text-align: center;
`
const Name = styled.li`
font-size: 2vw;
font-weight: bold;
`

const Box = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-gap: 3vw;

`
const Section = styled.section`



`
const Cadastros = styled.form`
border: solid red;
width: 30%;
display: grid;
place-items: center;
backdrop-filter: blur(6px) saturate(180%);
    -webkit-backdrop-filter: blur(6px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    position: absolute;
    top: 10%;
    left: 35%;
input{
  height: 2vw;
  margin-top: 0.5vw;
}
`
const Add = styled.button`

`

function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pet, setPet] = useState("");
  const [idade, setIdade] = useState("");
  const [lista, setLista] = useState([]);
  const [sexo, setSexo] = useState("");
  const [animal, setAnimal] = useState("");
  const [peso, setPeso] = useState("");
  const [vacina, setVacina] = useState("");
  const [historico, setHistorico] = useState("");
  const [tutor, setTutor] = useState("");

  const add = { pet: pet, idade: idade, sexo: sexo, historico: historico, animal: animal, peso: peso, vacina: vacina, tutor: tutor, id: Date.now() };


  const handleClick = () => {
    if (pet !== "") {
      setLista([...lista, add]);
      setPet("");
      setIdade("");
      setHistorico("");
      setSexo("");
      setAnimal("");
      setPeso("");
      setVacina("");
      setTutor("");

    }
  };
  //console.table(lista);

  const remover = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };
  //console.log(pet);
  // if input checked remover funciona

  return (
    <Conteiner>
      <Titulo>
      <h1>Tenha o controle da saúde do seu pet. </h1>
      <h2>Faça o cadastro de todos e não perca as informações.</h2>
      </Titulo>
      <Section>
        <Add onClick={() => setIsModalVisible(true)}>+</Add>
        {isModalVisible ? (
          <ModalMenu onClose={() => setIsModalVisible(false)}>
            <Cadastros
              onSubmit={(e) => {
                e.preventDefault();
              }}>
                <h2>Cadastre seu Pet</h2>
              <input
                value={pet}
                onChange={(e) => {
                  setPet(e.target.value);
                }} placeholder="Nome do pet"
              />
              <input
                value={animal}
                onChange={(e) => {
                  setAnimal(e.target.value);
                }} placeholder="Espécie"
              />

              <input type="number"
                value={idade}
                onChange={(e) => {
                  setIdade(e.target.value);
                }} placeholder="Idade" />

              <input
                value={sexo}
                onChange={(e) => {
                  setSexo(e.target.value);
                }} placeholder="Sexo" />

              <input
                value={peso}
                onChange={(e) => {
                  setPeso(e.target.value);
                }} placeholder="Peso" />
              <input
                value={vacina}
                onChange={(e) => {
                  setVacina(e.target.value);
                }} placeholder="Vacinas pendentes" />



              <textarea value={historico}
                onChange={(e) => {
                  setHistorico(e.target.value);
                }} rows="2" cols="20"
                placeholder="Faça um histórico de saúde do seu pet." />

              <input
                value={tutor}
                onChange={(e) => {
                  setTutor(e.target.value);
                }} placeholder="Seu nome"
              />
              <button
                onClick={() => {
                  handleClick();
                }}>
                ADD
              </button>

            </Cadastros>
          </ModalMenu>
        ) : null}
      </Section>
      <Box>
      {lista.map((item) => (
        <div key={item.id}>
          <ul>
            <Name>{item.pet}</Name>
            <li>Espécie-{item.animal}</li>
            <li>Idade-{item.idade}</li>
            <li>Sexo-{item.sexo}</li>
            <li>Peso-{item.peso}</li>
            <li>Vacina-{item.vacina}</li>
            <li>Hitórico-{item.historico}</li>
            <li>Tutor-{item.tutor}</li>
            <button
              onClick={() => {
                remover(item.id);
              }}>
              🗑️
            </button>
          </ul>

        </div>
      ))}
      </Box>
    </Conteiner>
  );
}

export default Main;
 /* <select onChange={(e) =>{
           setSexo(e.target.value);
         }}>
   <option value="sexo">Femea</option>
   <option value="sexo">Macho</option>
 </select>*/