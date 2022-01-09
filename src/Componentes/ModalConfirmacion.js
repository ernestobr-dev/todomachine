import React from "react";
import ReactDOM from 'react-dom';
import '../Estilos/Modal.css';

function ModalConfirmacion ({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modalConfirmacion')
    );
}

export {ModalConfirmacion};