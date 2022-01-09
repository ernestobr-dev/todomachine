import React from "react";
import {TodoContext} from '../Componentes/TodoContext';
import {TodoCounter} from '../Componentes/TodoCounter';
import {TodoSearch} from '../Componentes/TodoSearch.js';
import { CreateToDoButton } from '../Componentes/CreateTodoButton';
import {TodoList} from '../Componentes/TodoList';
import {TodoItem} from '../Componentes/TodoItem';
import {Modal} from '../Componentes/Modal';
import {TodoForm} from '../Componentes/TodoForm';



function AppUI() {

  const {error, 
        loading, 
        searchedTodos, 
        completeTodos, 
        openModal, 
        setOpenModal} = React.useContext(TodoContext);

    return (

        <React.Fragment>

          <TodoCounter />
           

          <TodoSearch />

                <TodoList>
                                
                {loading && <p>Estamos cargando, no te desesperes ...</p>}
                {error && <p>Hubo un error...</p>}
                {(!loading && !searchedTodos.length ) && <p>Crea tu primer TODO!!!</p>}

                {searchedTodos.map(
                    todo => (
                      <TodoItem key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed} 
                      onComplete = { () => completeTodos(todo.text)}
                      
                      />
                    )
                )}

                </TodoList>
                
                
                {openModal && (

                  <Modal>
                  <TodoForm
                    estado={'add'}

                  />
                  </Modal>

                )}

          <CreateToDoButton

            setOpenModal = {setOpenModal}

          />
            

      </React.Fragment>

    );
    
}

export {AppUI};