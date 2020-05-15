import React from 'react';
import ReactDOM from 'react-dom';





class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
       this.state = { 
        options:['one', 'two']
     }
    }
    handleAddOptions(option) {
        if(!option) {
            return 'Enter valid value to Add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This Option already exists'
        }
        this.setState((prevState) => {
            return{
                options: prevState.options.concat(option)
            }

        })

    }
    handleDeleteAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    render() { 
        const title= 'Indecision';
        const subtitle = 'Put your life in the computer hand!'
      
        return ( 
         
            <div>
                <Header  title={title} subtitle={subtitle}/>
                <Action />
                <Options options={this.state.options}
                         handleDeleteAll={this.handleDeleteAll}
                />
                <AddOptions handleAddOptions={this.handleAddOptions}/>
              
            
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            
            </div>
        )
    }
}
class Action extends React.Component {
    render() {
        return(
            <div className="action-btn">
                <button>What shall I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return(
            
            <div className="options">
                <button onClick={this.props.handleDeleteAll}>Remove All</button>
               {this.props.options.map((option) => <Option key={option} optionText={option}/>)} 
            
            </div>
        )
    }
}
const Option = (props) => {
    return (
        <div>
        {props.optionText}
       
        
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
               
                 {this.state.error && 
                    <div className="stu">{this.state.error} </div>}
                    
              
           
                 
                
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                
                </form>
            
            </div>
        )

    }
}


ReactDOM.render(<Indecision  />, document.getElementById('app')) 





//________________________________________________________________________










/*class Indecision extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteAction = this.handleDeleteAction(this)
       
        this.state = {
            options : [],
            description: [],
            priority: [],
            pickedAction:[]
            
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
        
    handleSubmit(option,desc, prio) { 
          
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
                description: prevState.description.concat(desc),
                priority: prevState.priority.concat(prio)
            }
        })
    }
handlePick() {

const randomNum = Math.floor(Math.random() * this.state.options.length) 
  
const option = this.state.options[randomNum]
const desc = this.state.description[randomNum]
const prio = this.state.priority[randomNum]
 
this.setState(() => {
    return {
        pickedAction: this.state.pickedAction.concat(option,desc,prio)
    }
})



}
handleDeleteAction(){
  
    this.setState(() => {
        return {
            pickedAction: false
        }
    }
    )
}
handleDeleteEachItem(option, desc, prio) {
    console.log('it is working', option, desc, prio)
    this.setState((prevState) => {
        return {
            options: prevState.options.filter((option) => {
                return optionToRemove !== option 
            
            })
            description: prevState.description.filter((desc) => {
                return optionToRemove !== desc
            }),
            priority: prevState.priority.filter((prio) => {
                return optionToRemove !== prio
            })
        }
    })
}

    render() {
        return (
            <div> 
                <Action handlePick={this.handlePick}
                        hasOption={this.state.options.length > 0}  
                        handleDeleteAction={this.handleDeleteAction}
                        pickedAction={this.state.pickedAction}     
                />

                 <Options options={this.state.options}
                        description={this.state.description}
                        priority = {this.state.priority}
                        handleDeleteAll={this.handleDeleteAll}
                        handleDeleteEachItem={this.handleDeleteEachItem}
                      
               />
               <AddOptions handleSubmit={this.handleSubmit}/>
                      
              
            </div>
        )
    }

}
class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAction = this.handleDeleteAction.bind(this)
    }
    handleDeleteAction(){
        this.props.handleDeleteAction(this.props.pickedAction)
    }
    render() {
        return(
            <div>
                <button onClick={this.props.handlePick}
                        disabled={!this.props.hasOption}
                >What shall i do now ?</button>
                <div>
            <h2>Your Current Option, description and priority is </h2>
            {this.props.pickedAction.map((action) => <p key ={action}> {action}</p>)}
            <button onClick={ (e) => {
                this.props.handleDeleteAction(this.props.pickedAction)
            }
                }>Done</button>
           
            </div>

            </div>
        )
    }
}

class Options extends React.Component {

    render() {

    return (
        <div className="options">
            <button onClick={this.props.handleDeleteAll}>Remove All</button>
             <h1>Options</h1>
            <h3>{this.props.options.map((option, idx) =>  <OptionAll key={idx} 
                                                        optionText={option}
                                                         handleDeleteEachItem={this.props.handleDeleteEachItem}
                                                        />)}</h3>
                                                       
            <h1>Description</h1>
            <h3>{this.props.description.map((desc, idx) => <OptionAll key={idx} 
                                                            descText={desc}
                                                             handleDeleteEachItem={this.props.handleDeleteEachItem}
                                                            />)}
                                                           
                                                            </h3>
            <h1>Priority</h1>
            <h3>{this.props.priority.map((prio, idx) => <OptionAll key={idx} 
                                                        prioText={prio}
                                                        handleDeleteEachItem={this.props.handleDeleteEachItem}
                                                        />)}
                                                        </h3>
           
           
        </div>
    )


}
}
class OptionAll extends React.Component {

    render() { 
        return (
        <div >
            
          {this.props.optionText}
            {this.props.descText}
          {this.props.prioText}
          <button onClick={(e) => {
            this.props.handleDeleteEachItem(this.props.optionText)
            this.props.handleDeleteEachItem(this.props.descText)
            this.props.handleDeleteEachItem(this.props.prioText)
          }}
          
          >Remove</button>
        </div>
        )}
}



class AddOptions extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this)
       
    }
    handleSubmit(e) {
        e.preventDefault();
       
    const option= e.target.elements.option.value.trim();
    const desc= e.target.elements.desc.value.trim();
    const prio= e.target.elements.prio.value.trim();

    this.props.handleSubmit(option, desc, prio)
    
    


    }
    render() {
        return (
            <div>
               
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <input type="text" name="desc"/>
                    <input type="text" name="prio"/>
                    <button>Submit</button>
                </form>
            
            </div>
        )

    }
}


ReactDOM.render(<Indecision />, document.getElementById('app')) */





//__________________________________________________________________________
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
    this.setState((prevState) => {
        return {
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }
    })
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



