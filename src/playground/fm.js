import React from 'react';
import ReactDOM from 'react-dom'
console.log('app.js is running');

class IndecisionApp extends React.Component {
    
    
    render() { 
        const title = 'Indecision App'
        const subtitle = 'Put your life on the hands of a computer'
        const options = ['one','two','three']
        const description = ['description1','description2', 'description3']
        const priority = ['priority1','priority2','priority3']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action /> 
                <Options options={options}/>
                <Description description={description}/>
                <Priority  priority={priority} />
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
    handlePick() {
        alert('handlePick')
    }
     render() { 
         return ( 
             <div>
                <button onClick={this.handlePick}>what shall i do</button>
             </div>
          );
     }
 }
  
 class Options extends React.Component {
     removeAll() {
         alert('remove All')
     }
     render() {
         return (
             <div>
             <button onClick={this.removeAll}>RemoveAll</button>
             {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
             
             </div>
         )
     }
 }
 class Option extends React.Component {
    render() {
        return (

           <div>
              option:{this.props.optionText}
           </div>
        )
    }
}
   class Description extends React.Component {
    render() {
        return (

           <div>
           
               {this.props.description.map((ds) => <DeOption key={ds} dsText={ds}/>)}
           </div>
        )
    }
}
class DeOption extends React.Component {
    render() {
        return (

           <div>
              {this.props.dsText}
           </div>
        )
    }
}
class Priority extends React.Component {
    render() {
        return (

           <div>
               {this.props.priority.map((pr) => <PrOption key={pr} prText={pr}/>)}
           </div>
        )
    }
}
class PrOption extends React.Component {
    render() {
        return (

           <div>
              {this.props.prText}
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










ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




