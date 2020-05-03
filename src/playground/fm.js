import React from 'react';
import ReactDOM from 'react-dom';

class Indecision extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        
        this.state = {
            options : ['one', 'two', 'three'],
            discription: ['it is my discription','it is our disc'],
            priority : ['low', 'medium', 'high']
        }
    }
        

handleDeleteAll() {
    this.setState(() => {
        return {
            options : [],
            discription:[],
            priority:[]
        }
    })

}
handlePick() {
    alert('test')
}


    render() {
            const title = 'Indecision';
            const subtitle = 'Put your life in the hand of a computer!';
          
        return (
            <div>
                <Header title= {title} subtitle = {subtitle}/>
                <Action  hasOptions= {this.state.options.length > 0}
                        handlePick={this.handlePick}
               
                />
                <Options options= {this.state.options} handleDeleteAll= {this.handleDeleteAll}
                    discription= {this.state.discription}
                    priority = {this.state.priority}
                    
                />
                <AddOption   />
            
            
            </div>
        )
    }
}
 class Header extends React.Component {

    render() {
        return (
            <div>
                <h1> {this.props.title}  </h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
 }


 class Action extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled ={!this.props.hasOptions}
               
                
                >what shall I do?</button>
            </div>
        )
    }
 }



 class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteAll}>Remove All</button>
                <button onClick={this.props.handleBack}>Bring it back</button>
                <h3>{this.props.options.length > 0 ? 'Here are your Option' : 'no option'}</h3>
            
               {this.props.options.map((option) => <Option  key={option} optionText={option}/>)}
                <h3>{this.props.discription.length > 0 ? 'Here are your Discriptions' : 'No Discription'}</h3>
               {this.props.discription.map((dis) => <p key={dis}>{dis}</p>)}
                <h3>{this.props.priority.length > 0 ? 'Here are your Priorities' : 'No Priority'}</h3>
               {this.props.priority.map((pri) => <p key={pri}>{pri}</p>)}
            </div>
        )
    }
 }


 class Option extends React.Component {

    render() {
        return (
            <div>
               {this.props.optionText}
            </div>
        )
    }
 }

 class AddOption extends React.Component {

    render() {
        return (
            <div>
               <form>
                <input type="text" name="option" />
                <button>Add Option</button>
               </form>
            </div>
        )
    }
 }



ReactDOM.render(<Indecision />, document.getElementById('app'))
























/*
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        if(option) {
            alert(option)

        }
    }
     render() {
         return (

            <div>
               <form onSubmit={this.handleAddOption}>
                    <input type='text' name= 'option' />
                    <button>Add</button>
               </form>
            </div>
         )
     }
 }










ReactDOM.render(<IndecisionApp />, document.getElementById('app'));*/




