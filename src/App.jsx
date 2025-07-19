
import React, { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo"


function App(){//set coloca dados e todos consulta
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: "Criar funciuonalidade X no sistema",
        category: "trabalho",
        isCompleted: false,       
      },
      {
        id: 2,
        text: "Ir para a academia",
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false, 
      },
    ]);
     
    return( 
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
    </div>

);
}

export default App