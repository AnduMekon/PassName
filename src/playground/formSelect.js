import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: ''
         }
    }

    userNameHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
       
    }
     
  
    render() { 
        return ( 
            <form>
                <div>
                    <label>User Name</label>
                    <input type="text" value={this.state.userName} onChange={this.userNameHandler}/>
                
                </div>
            
            
            </form>
         );
    }
}
 
ReactDOM.render(<Form />, document.getElementById('app'))
