import React from "react";
import '../Estilos/TodoList.css';

function TodoList(props){

    return(

        <section>
        <ul>
          {props.children}
        </ul>
      </section>

    );

}

export {TodoList};
