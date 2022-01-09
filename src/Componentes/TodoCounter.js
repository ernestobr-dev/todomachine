import React from "react";
import '../Estilos/TodoCounter.css';
import {TodoContext} from '../Componentes/TodoContext';


function TodoCounter (){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(

        <h2 className="TodoCounter">Has completado {completedTodos} de  {totalTodos} tareas</h2>

    );

}

export {TodoCounter};