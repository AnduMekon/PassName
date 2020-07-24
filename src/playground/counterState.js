import React from 'react';
import ReactDOM from 'react-dom';
class Count extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleMins = this.handleMins.bind(this)
        this.handleRest = this.handleRest.bind(this)
        this.state = {
            count:0
        }
    }
    handleAdd() {
        this.setState((prevState)=> {
            return {
                count:prevState.count +1
            }
        })
    }
    handleMins() {
        this.setState((prevState)=> {
            return {
                count:prevState.count -1
            }
        })
    }
    handleRest() {
        this.setState(()=> {
            return {
                count:0
            }
        })
    }
    render() {
        return (
            <div> 
            <h1> count: {this.state.count} </h1>
            <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleMins}>-</button>
            <button onClick={this.handleRest}>REST</button>
            
            
            </div>

        )
    }
}


ReactDOM.render(<Count />, document.getElementById('app'))







/*class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.addHandler = this.addHandler.bind(this);
        this.minsHandler = this.minsHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.state = {
            count:0
        }
    }
addHandler() {
   this.setState((prevState) => {
       return ({
            count : prevState.count + 1
       }
          
       )
   })
}
minsHandler() {
   this.setState((prevState) => {
       return (
           {
               count: prevState.count -1
           }
       )
   })
}
resetHandler() {
    this.setState((prevState) => {
        return ({
            count: 0
        })
    })
}

    render() {
        return(
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.addHandler}>+</button>
                <button onClick={this.minsHandler}>-</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'))*/