import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

     render() { 
         const title = 'Andualem App';
         const subtitle = 'keep practice';
        const options = ['thing one', 'thing two', 'thing three']
        return ( 

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action />
                <Options options = {options} />
                <AddOption />

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
            
            </div>
         );
    }
}
class Options extends React.Component {
  
   
    render() { 
        return ( 
            <div>
                <p>{this.props.options}</p>
            </div>
         );
    }
}
 
export default Options;
class AddOption extends React.Component{
 
    render() { 
        return ( 
            <div>
               <input />
               <br/>
               <br/>
               <input />
            
            </div>
         );
    }
}

class Option extends React.Component {
  
    render() { 
        return (  
            <div>
            
            
            </div>
        );
    }
}
 

 

 

 

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))