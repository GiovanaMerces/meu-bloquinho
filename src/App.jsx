import React, { useState } from 'react';

function App() {
 const [task, setTask] = useState("")
const[tempo, setTempo] = useState(0)
const [listaTarefas, setlistaTarefas] = useState()

//adicionar uma nota
 function adicionarNota(){
  const novaTarefas = {
   task,
   tempo
  }

setlistaTarefas(...listaTarefas)
 }
//apagar uma nota
//pra escutar os inputs
function handleInputs(evento){
if(evento.target.name == "task"){
   console.log(evento.target.value)
   setTask(evento.target.value)
}else{
  setTempo(evento.target.value)
}
}
  return (
  
    <>
      <h1>blocos de notas</h1>
      <label>nota</label>
      <input  name= "task"type="text"  onChange={handleInputs} />  
      <label>tempo</label>
      <input name='tempo' onChange={handleInputs} type="number" /> 
      <button>adicionar nota</button>

{ listaTarefas.map((=>{}))}

    </>
  );
}

export default App;
