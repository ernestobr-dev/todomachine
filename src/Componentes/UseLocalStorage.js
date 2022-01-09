import React from "react";
import Swal from "sweetalert2";

function useLocalStorage(itemName, initialValue){

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout( () => {
  
       try {
        
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem){
          
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
          
        }
        else{
          parsedItem = JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        setLoading(false);
  
       } catch (error) {
  
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ha ocurrido un error',
          showConfirmButton: false,
          timer: 1500
        })
         
       }
  
      }, 1000 );
      
    });
    
    
    const saveItem = (newItem) => {
  
      try {
        
        const stringifieldItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifieldItem);
        setItem(newItem);
  
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  
  }

  export {useLocalStorage};