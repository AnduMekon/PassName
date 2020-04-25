import React from 'react';
import ReactDOM from 'react-dom';

class VisiblityToggle  extends React.Component {
    constructor(props) {
        super(props);
        this.visiblityHandler = this.visiblityHandler.bind(this);
        
        this.state = { 
            visiblity: false, 
            
            count: 0
         }
    }
    visiblityHandler() {
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity
            }
        })
    }

    render() { 
        return (  
            <div>
                <button onClick={this.visiblityHandler}>
                {this.state.visiblity ? 'hide detail' : 'show detail'}
                
                </button>
                {this.state.visiblity && (

                    <div>
                     
                    <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                    </div>
                )}
            
            {options.map((option) => <p key={option}>{option}</p>)}
            
            </div>

        );
    }
}
 
ReactDOM.render(<VisiblityToggle />, document.getElementById('app'))


























/*import React from 'react';
import ReactDOM from 'react-dom';



class VisiblityToddle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisiblityToggle = this.handleVisiblityToggle.bind(this);
        this.state = {
            visiblity: false,
            d: 'this is the detail'
        }
    }

    handleVisiblityToggle() {
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity,
                
            }
        })
    }
    
    render() { 
        return (  
            <div>
            <button onClick={this.handleVisiblityToggle} >
            {this.state.visiblity ? 'hide detail' : 'showdetail'} 
            </button>
            {this.state.visiblity && (
                <div>
                  <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                  </ul>
                </div>
            )}
            
           
            
            </div>

        );
    }
}
ReactDOM.render(<VisiblityToddle />, document.getElementById('app')); */