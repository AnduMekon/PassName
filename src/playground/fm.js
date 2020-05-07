import React from 'react';
import ReactDOM from 'react-dom';

class Indecision extends React.Component{
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
handleDeleteOption(option) {
    console.log('hbd', option);
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
class Options extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleDeleteAll}>Remove All</button>
            {this.props.options.map((option) => <Option 
                key={option} optionText={option}
                handleDeleteOption={this.props.handleDeleteOption}
                />)}
            
            </div>
        )

    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
            {this.props.optionText}
            <button onClick={this.props.handleDeleteOption}>remove</button>
            </div>
        )

    }
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
ReactDOM.render(<Indecision />, document.getElementById('app'))



/*class Indecision extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options:[]
        }
    }

handleAddOptions(option) {
    if(!option) {
        return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists'
    }

    this.setState((prevState) => {
        return {
            options: prevState.options.concat(option)
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
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
}
    render() {

            const title = 'Indecision';
            const subtitle = 'Put your life in the hand of computer';
         

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick={this.handlePick}
                        hasOption = {this.state.options.length > 0}
                />
                <Options  options = {this.state.options} 
                          handleDeleteAll = {this.handleDeleteAll}
                />
                <AddOptions handleAddOptions = {this.handleAddOptions}/>
            
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
           <button onClick={this.props.handlePick}
                   disabled={!this.props.hasOption} 
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
            {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        
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
class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOptions(e) {
        e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option)
    this.setState (() => {
        return {error}
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
ReactDOM.render(<Indecision />, document.getElementById('app'))*/























