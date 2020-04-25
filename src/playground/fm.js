import React from 'react';
import ReactDOM from 'react-dom'
console.log('app.js is running');

class IndecisionApp extends React.Component {
    
    
    render() { 
        const title = 'Indecision App'
        const subtitle = 'Put your life on the hands of a computer'
        const Options= ['one','two','three']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action /> 
                <Options />
                <AddOption />
                <Description />
                <Priority  />
            </div> 
        
         );
    }
}
class Header extends React.Component {
    
    render() { 
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            
            </div>
         );
    }
}
 class Action extends React.Component {
    
     render() { 
         return ( 
             <div>
                <button>what shall i do</button>
             </div>
          );
     }
 }
  
 class Options extends React.Component {
     render() {
         return (
             <div>
             <p>this your options</p>
             
             </div>
         )
     }
 }
  
 class AddOption extends React.Component {
     render() {
         return (

            <div>
                <p>add option</p>
            </div>
         )
     }
 }

 class Description extends React.Component {
    render() {
        return (

           <div>
               <p>Description</p>
           </div>
        )
    }
}
class Priority extends React.Component {
    render() {
        return (

           <div>
               <p>Priority</p>
           </div>
        )
    }
}
 








ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




