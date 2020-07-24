import React from 'react';
import ReactDOM from 'react-dom'

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ''
        }
    }
    handleChange = (event) => {
        let eventName = event.target.name;
       
        this.setState ({
            [eventName] : event.target.value
        }) 
        
    }
    render () {
        return (
            <div>
            <form>
            <div> 
                <label>FirstName</label>
                <input value = {this.state.firstName} name = {'firstName'} onChange= {this.handleChange} />
            </div>
            <br/>
            <div> 
                <label>LastName</label>
                <input value = {this.state.lastName} name = {'lastName'} onChange= {this.handleChange} />
            </div>
            
            </form>
            
            </div>
            
            
        )
    }
}
ReactDOM.render(<Practice />, document.getElementById('app'))