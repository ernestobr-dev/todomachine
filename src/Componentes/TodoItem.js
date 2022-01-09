import React from "react";
import '../Estilos/TodoItem.css';
import {FaCheck} from 'react-icons/fa';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsPencilSquare} from 'react-icons/bs';
import { ConfirmarForm } from "./ConfirmarForm";
import { ModalConfirmacion } from "./ModalConfirmacion";
import { Modal } from "./Modal";
import {TodoForm} from '../Componentes/TodoForm';


function TodoItem (props){

  const [deleteModal, setDeleteModal] = React.useState(false);
  const [updateModal, setUpdateModal] = React.useState(false);

  const modEstado = (estado) =>{

    if(estado === 'delete'){
      setDeleteModal(prevState => !prevState);
    }
    else{
      setUpdateModal(prevState => !prevState);
      
    }

  }

    return(

        <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
          <FaCheck></FaCheck>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete"
        onClick={() => modEstado('delete')}
        >
          <RiDeleteBin6Line/>

          {deleteModal && (
                  <ModalConfirmacion>
                      
                      <ConfirmarForm 
                          nombreEliminar = {props.text}
                          estado={'delete'}
                          deleteModal = {deleteModal}
                          setDeleteModal = {setDeleteModal}
                      />

                  </ModalConfirmacion>
                )}
        </span>

        <span className="Icon Icon-modify" onClick={() => modEstado('update')}>
            <BsPencilSquare/>

           

        </span>
         {updateModal && (

              <Modal>
                <TodoForm
                  nombreUpdate = {props.text}
                  estado = {'update'}
                  setUpdateModal = {setUpdateModal}
                />
              </Modal>

            )}

      </li>
      

    );

}

export {TodoItem};