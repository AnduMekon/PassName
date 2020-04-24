import React from 'react';
import ReactDOM from 'react-dom';



const andy = (


    <div>
        <form>
            <input type='text' placeholder='task' name='option' />
            <br/>
            <br/>
            <input type='text' placeholder='description' name='description' />
            <br/>
            <br/>
            <input type='text' placeholder='priority' name='priority' />
            <br/>
            <br/>
            <button>Add</button>
        
        </form>
    </div>

)
ReactDOM.render(andy, document.getElementById('app'))






























/*import React from 'react';
import ReactDOM from 'react-dom';


const ck = {
   
   options: [],
   description: []
}

const onsubmitForm = (e) => {
    e.preventDefault(e)
    const option = e.target.elements.option.value
    const description = e.target.elements.description.value
    console.log('form submitted')
    if(option) {
        ck.options.push(option)
        e.target.elements.option.value = ''
    }
    if(description) {
        ck.description.push(description)
        e.target.elements.description.value = ''
    }
    render(); 

}



 const render = () => { 
     const andy = (

    <div>
      
        
        <div>
            <h1>Task</h1>
            <p>{ck.options}</p>
            <h1> Description</h1>
            <p>{ck.description}</p>
        </div>
        
        
        

        <form onSubmit={onsubmitForm}>
            <input type="text" placeholder="task" name= "option" />
            <input type="text" placeholder="description" name= "description" />
            
            
            <button>Add All</button>
        </form>
        
    </div>
 )
            ReactDOM.render(andy, document.getElementById('app'))
 }
 

render();
*/
