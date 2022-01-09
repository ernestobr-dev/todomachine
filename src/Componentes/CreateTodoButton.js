import React from "react";
import '../Estilos/CrearTodoButton.css';

function CreateToDoButton(props) {
    
    const onClickButton = () => {
        
        props.setOpenModal(prevState => !prevState);

    };

    return (

        <button className="CreateTodoButton"
        onClick={onClickButton}
        >
            
            +
            
        </button>

    );

}


export {CreateToDoButton};
