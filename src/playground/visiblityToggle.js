import React from 'react';
import ReactDOM from 'react-dom';

class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props); 
        this.handleVisiblity = this.handleVisiblity.bind(this)
        this.state = {
            visiblity : false
        }
    }
    handleVisiblity() {
        this.setState((prevState) => {
            return ({
                visiblity: !prevState.visiblity
            })
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleVisiblity}> 
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
               
            </div>
        )
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