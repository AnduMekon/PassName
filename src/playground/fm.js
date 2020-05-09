import React from 'react';
import ReactDOM from 'react-dom';


class Indecision extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
       
        this.state = {
            options : [],
            description: [],
            priority: []
        }
    
    }
 handleDeleteAll() {
    this.setState(() => {
        return {
            options : [],
            description: [],
            priority: []
        }
    })
 }
        
    handleSubmit(e) { 
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        const desc = e.target.elements.desc.value.trim()
        const prio = e.target.elements.prio.value.trim()
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
                description: prevState.description.concat(desc),
                priority : prevState.priority.concat(prio)
            }
        })
    }
handlePick() {
    alert('it is working')

}

    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <h3>Add Options</h3>
                    <input type="test" name="option" />
                    <h3>Add Description</h3>
                    <input type="test" name="desc" />
                    <h3>Add priority</h3>
                    <input type="test" name="prio" />
                    
                    <button>Submit</button>
                </form>
                <Action handlePick={this.handlePick}/>
               <Options options={this.state.options}
                        description={this.state.description}
                        priority = {this.state.priority}
                        handleDeleteAll={this.handleDeleteAll}
                      
               />
               
              
            </div>
        )
    }

}
class Action extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.handlePick}>What shall i do now ?</button>
            </div>
        )
    }
}
class Options extends React.Component {

    render() {

    return (
        <div>
            <button onClick={this.props.handleDeleteAll}>Remove All</button>
             <h1>Options</h1>
            <h3>{this.props.options.map((option) => <OptDesPrioDelete key={option} optionText={option}/>)}</h3>
            <h1>Description</h1>
            <h3>{this.props.description.map((desc) => <OptDesPrioDelete key={desc} descText={desc}/>)}</h3>
            <h1>Priority</h1>
            <h3>{this.props.priority.map((prio) => <OptDesPrioDelete key={prio} prioText={prio}/>)}</h3>

           
          
        </div>
    )


}
}
class OptDesPrioDelete extends React.Component {

    render() { 
        return (
        <div>
       
            {this.props.optionText}
      
            {this.props.descText}
      
            {this.props.prioText}
            <button>Edit</button>
        </div>
        )}
}


ReactDOM.render(<Indecision />, document.getElementById('app'))
/*class Indecision extends React.Component{
    constructor(props) {
        super(props); 
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.state = {
            options: ['one','two']
        }
    }
handleAddOptions(option) {
    if(!option) {
        return 'Enter valid value to add item'
    } else if(this.state.options.indexOf(option)> -1) {
        return 'This Option already exists'
    }
    this.setState((prevState) => {
        return {
            options:prevState.options.concat(option)
        }
    })
}    
handleDeleteAll() {
this.setState(() => {
    return {
        options:[]
    }
})

}
handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
}
handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
            return optionToRemove !== option
        })
    }

    ))
}

    render() {
                const title = 'Indecision';
                const subtitle = 'Put your life in the hand of computer'

        return (

            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action handlePick={this.handlePick}
                        hasOptions = {this.state.options.length > 0}
                />
                <Options options={this.state.options}
                         handleDeleteAll={this.handleDeleteAll}
                         handleDeleteOption ={this.handleDeleteOption}
                />
                <AddOptions handleAddOptions={this.handleAddOptions}/>
                    
                    
             </div>

        )
        
        
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
               <h1>{this.props.title}</h1>
               <h2>{this.props.subtitle}</h2>
            
            </div>
        )

    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.handlePick}
                        disabled={!this.props.hasOptions}
                >what shall I do?</button>
            
            </div>
        )

    }
}
const Options = (props) => {

    return (
        <div>
            <button onClick={props.handleDeleteAll}>Remove All</button>
            {props.options.map((option) => (
                <Option
                key={option}
                optionText={option}
                handleDeleteOption= {props.handleDeleteOption}
                />)
                )}
        
        
        
        </div>

    )
}
const Option =(props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)

            }}>Remove</button>
        
        </div>
    )
}








class AddOptions extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOptions(e) {
        e.preventDefault();
    const option= e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option)
    this.setState(() => {
        return {
            error
        }
    })

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                
                </form>
            
            </div>
        )

    }
}
ReactDOM.render(<Indecision />, document.getElementById('app')) */



