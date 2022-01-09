import React from 'react';
import {AppUI} from './Componentes/AppUI.js';
import {TodoProvider} from './Componentes/TodoContext';

// import './App.css';

// const defaulTodos = [{text: 'Cortar cebolla', completed: false },
//                   {text: 'Tomar curso de intro a React', completed: false },
//                   {text: 'Llorar con la llorona', completed: false },
//                   {text: 'Comprar pan', completed: false }]


                  
function App() {



  return (
    
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
      
  );
}

export default App;
