//https://www.youtube.com/watch?v=7Vo_VCcWupQ
import React from 'react';
import ReactDOM from 'react-dom'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            comments:'',
            topics: ''

         }
    }
    
    usernameHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    commentHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    topicHandler = () => {
        this.setState({
            topics: event.target.value
        })
    }
    formHandler = () => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
    }
    render() { 
        return ( 

            <form onSubmit={this.formHandler}>
                <div>
                    <label>User Name</label>
                    <input value={this.state.username} onChange={this.usernameHandler} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.commentHandler}></textarea>

                </div>
                <div>
                    <select value={this.state.topics} onChange={this.topicHandler}> 
                        <option>React</option>
                        <option>veu</option>
                        <option>Angular</option>
                    </select>
                </div>
                <button>Submit</button>
            
            
            
            </form>

         );
    }
}
 
ReactDOM.render(<Form />, document.getElementById('app'))


























/* import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            comments:'',
            topics:''
         }
    }

    userNameHandler = (event) => {
        this.setState({
            userName: event.target.value,
            
        })
       
    }
    commentsHandler= event => {
        this.setState({
            comments : event.target.value,
            
        })
       
    }
  topichandler = event => {
        this.setState({
        topics: event.target.value,
            
        })
       
    }
    formHandler = event => {
        
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
    }
    render() { 
        return ( 
            <form onSubmit={this.formHandler}>
                <div>
                    <label>User Name</label>
                    <input 
                        type="text" 
                        value={this.state.userName} 
                        onChange={this.userNameHandler}/>
                
                </div>

                <div>
                    <label>Comment</label>
                    <textarea 
                        value={this.state.comments} 
                        onChange={this.commentsHandler}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topics} 
                            onChange={this.topichandler}>
                        <option>one</option>
                        <option>two</option>
                        <option>three</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                 </div>
            
            
            </form>
         );
    }
}
 
ReactDOM.render(<Form />, document.getElementById('app'))*/

