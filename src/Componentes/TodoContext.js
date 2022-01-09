import React from "react";
import {useLocalStorage} from '../Componentes/UseLocalStorage';



const TodoContext =  React.createContext();

function TodoProvider(props) {

    const {  item: todos, 
             saveItem: saveTodos,
             loading,
             error} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1){
        searchedTodos = todos;
    }
    else{
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        
        })
    }



    const completeTodos = (nombreTodo) => {

        const indexTodoEliminar = todos.findIndex(todo => todo.text === nombreTodo );

        if(todos[indexTodoEliminar].completed){
            const todosCompletados = [...todos];
            todosCompletados[indexTodoEliminar].completed = false;
            saveTodos(todosCompletados);
        }
        else{
            const todosSinCompletar = [...todos];
            todosSinCompletar[indexTodoEliminar].completed = true;
            saveTodos(todosSinCompletar);
        }

    }

    const addTodo = (nombreTodo) => {

        const newTodos = [...todos];

        newTodos.push({
            completed: false,
            text: nombreTodo
        });
        
        saveTodos(newTodos);

    }

    const deleteTodos = (nombreTodo) => {

        const index = todos.findIndex(todo => todo.text === nombreTodo );

        const newTodos =  [...todos];

        newTodos.splice(index, 1);

        saveTodos(newTodos);


    }

    const updateTodo = (nombreUpdate, newName) => {
        
        const indexTodoUpdate = todos.findIndex(todo => todo.text === nombreUpdate );
        const updateTodos = [...todos];
        updateTodos[indexTodoUpdate].text = newName;
        updateTodos[indexTodoUpdate].completed = false;
        saveTodos(updateTodos);

    }
    

    return(

        <TodoContext.Provider

            value={{

                error ,
                totalTodos ,
                completedTodos,
                searchValue ,
                setSearchValue ,
                searchedTodos,
                completeTodos ,
                deleteTodos,
                loading,
                openModal,
                setOpenModal,
                addTodo,
                updateTodo
                

            }}

        >

            {props.children}

        </TodoContext.Provider>


    );

}

export {TodoContext, TodoProvider};