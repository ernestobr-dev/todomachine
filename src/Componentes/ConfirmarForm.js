import React from "react";
import { TodoContext } from "./TodoContext";
import '../Estilos/TodoForm.css';
import Swal from "sweetalert2";

function ConfirmarForm(props){

    const {

        addTodo,
        setOpenModal,
        deleteTodos,
        updateTodo

    } = React.useContext(TodoContext);


    const onSubmit = (event) =>{
        
      
        props.setOpenModalConfirmar(false);
        event.preventDefault();
        addTodo(props.newTodoValue);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Nueva tarea añadida a la lista',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {

              setOpenModal(false);
          })
        
        

    }

    const onDelete = () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tarea eliminada de la lista correctamente',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {

            deleteTodos(props.nombreEliminar);
            props.setDeleteModal(false);
          })
       
    }

    const onExit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        props.setOpenModalConfirmar(false);
        
    }

    const onUpdate = (event) =>{
        props.setOpenModalConfirmar(false);
        event.preventDefault();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tarea modificada correctamente',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            updateTodo(props.nombreUpdate,props.newTodoValue);
            setOpenModal(false);
          })
        
    }


    return(

        <form onSubmit={onSubmit} >
            {props.estado === 'add' && (
                <label>¿Seguro que quieres añadir la nueva tarea?</label>
                
            )}
            {(props.estado === 'delete' && props.deleteModal) && (
                <label>¿Seguro que quieres eliminar la tarea?</label>
            )}
            {(props.estado === 'update') && (
                <label>¿Seguro que quieres modificar la tarea?</label>
            )}
            <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onExit}
            >
                Cancelar
            </button>
    
                {(props.estado === 'delete') && (  <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "button"
                    onClick={onDelete}
                >
                    Eliminar                   
                    

                </button>
                )}

                {(props.estado === 'add' ) && (  <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "submit"
                >
                    Confirmar                   
                    

                </button>
                )}
              
              {props.estado === 'update' && (  <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "button"
                    onClick={onUpdate}
                >
                    Modificar                   
                    

                </button>
                )}

            </div>
      </form>

    );

}

export {ConfirmarForm};