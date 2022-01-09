import react from "react";
import { TodoContext } from "./TodoContext";
import '../Estilos/TodoForm.css';
import { ModalConfirmacion } from "./ModalConfirmacion";
import {ConfirmarForm} from '../Componentes/ConfirmarForm';
import Swal from "sweetalert2";

function TodoForm(props) {

    const [newTodoValue, setNewTodoValue] = react.useState();
    const [openModalConfirmar, setOpenModalConfirmar] = react.useState(false);

    const {

        setOpenModal

    } = react.useContext(TodoContext);
    
    const onCancel = () => {
        setOpenModal(false);
        props.setUpdateModal(false);
        
    }

    const onChange = (event) => {
        
        setNewTodoValue(event.target.value);

    }

    const onSubmit = (event) => {

        event.preventDefault();
        let myRe = /^\s*$/;
        if(myRe.exec(newTodoValue) || newTodoValue === null || newTodoValue === undefined){
          Swal.fire({
            title:'Aviso',
            text:'El nombre de la nueva tarea no puede ser vacío',
            icon:'warning',
            confirmButtonText:"Aceptar"

          });
        }
        else{
        setOpenModalConfirmar(true);        
        }
        
    }

    const onUpdate = (event) =>{

      event.preventDefault();
      let myRe = /^\s*$/;
      if(myRe.exec(newTodoValue) || newTodoValue === null || newTodoValue === undefined){
        Swal.fire({
          title:"Aviso",
          text:"El nuevo nombre de la tarea no puede ser vacío.",
          icon:'warning',
          confirmButtonText:"Aceptar"

        });
      }
      else{
        setOpenModalConfirmar(true);
      }
      

    }

    return(

      

        <form onSubmit={onSubmit} >

          {props.estado === 'update' && (

            <div>
              <label>Modifica el nombre de la tarea</label>
              
               <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = {props.nombreUpdate}
              />
            </div>

          )}

          

          {props.estado === 'add' && (

            <div>
              <label>Escribe tu nueva tarea</label>
              
              <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Nueva tarea"
              />  
            </div>

          )}

        
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick = {onCancel}
          >
            Cancelar
          </button>
          {props.estado === 'add' && (
          <button
                  className="TodoForm-button TodoForm-button-add"
                  type= "submit"
                >
                    Añadir </button>
                    
            ) }

            {openModalConfirmar && (<ModalConfirmacion>
              <ConfirmarForm

                  setOpenModalConfirmar= {setOpenModalConfirmar}
                  newTodoValue = {newTodoValue}
                  estado = {'add'}
                  
              />
          </ModalConfirmacion>)}

          


            {props.estado === 'update' && (
            <button onClick={onUpdate}  className="TodoForm-button TodoForm-button-add" type="button">
                Modificar </button>)}

              
           
            {(props.estado === 'update' && openModalConfirmar ) && (

                    <ModalConfirmacion>
                        <ConfirmarForm

                            setOpenModalConfirmar= {setOpenModalConfirmar}
                            newTodoValue = {newTodoValue}
                            nombreUpdate = {props.nombreUpdate}
                            estado = {'update'}
                            
                        />
                    </ModalConfirmacion>
                    
              )}

              

        </div>
      </form>

    );
    
}

export {TodoForm};