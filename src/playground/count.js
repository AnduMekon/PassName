import React from 'react';
import ReactDOM from 'react-dom';


const ck = {
   
   options: []
}

const OnsubmitForm = (e) => {
    e.preventDefualt(e)
    const option = e.target.element.option.value;
    
     if(option) {
         ck.options.push(option);
         e.target.element.option.value= '';
        render();  
     }
     

}



 const render = () => {const andy = (

    <div>
      
        <p>{ck.options.length}</p>

        <form onSubmit={OnsubmitForm}>
            <input type="text" name= "option" />
            
            
            <button>Add All</button>
        </form>
    </div>
 )
            ReactDOM.render(andy, document.getElementById('app'))
 }
 

render();

