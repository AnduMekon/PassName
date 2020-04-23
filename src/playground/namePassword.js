import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/components/_emailvaldator.scss';


class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
      
    }
    valid(item, type) {
       
        let itemValue = item.target.value;
        switch (type) {
            case "name":{
                this.setState({name: itemValue})
            }
            case "password": {
                this.setState({password:itemValue})
            }

        }
       
    }
    submit() {
       
        let obj = {}
        obj.name = this.state.name;
        obj.password = this.state.password;
        console.warn("submit", obj)
    }
    render() { 
        return ( 
            <div >
                <h1> ReactJs form submition and validation</h1>
                
                <div className="me" >
                        <input type="text " placeholder="Enter Name"  onChange={(item) => this.valid(item, 'name')}/>
                        <br/>
                        <input type="text" placeholder="Enter Password" onChange={(item) => this.valid(item, 'password')}/>
                        <br/>
                        <input type="text" placeholder="description" onChange={(item) => this.valid(item, 'description')}/>
                        <br/>
                        <button onClick={() => this.submit()}>Submit</button>
                       
                </div>
                

            </div>
         );
    }
}
ReactDOM.render(<HomeComponent />, document.getElementById('app'));