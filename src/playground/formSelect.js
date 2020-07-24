//https://www.youtube.com/watch?v=7Vo_VCcWupQ
import React from 'react';
import ReactDOM from 'react-dom'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            car:'',
            bike: ''
          

         }
    }
    handleChange = (event) => {
        let eventid = event.target.id;
        console.log(eventid)
        this.setState ({
            [eventid] : event.target.value
        })
    }

   
     formHandler = () => {
         alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
     this.setState((prevState)=> {
          return {
              username: prevState.username,
              comments: prevState.comments,
              topics: prevState.topics
      }
   })
     }
    render() { 
        return ( 
            <div>
            
            <form onSubmit={this.formHandler}>
               
                <button>Submit</button>
                <label> Car</label>
            <input value = {this.state.car} id = {'car'} onChange = {this.handleChange} />
                <label>Bick</label>
            <input value = {this.state.bike} id = {'bike'} onChange = {this.handleChange} />
            
            
            
            </form>
            <h2>UserName</h2>
            <p>{this.state.username}</p>
            <h2>Comments</h2>
            <p>{this.state.comments}</p>
            <h2>Topics</h2>
            <p>{this.state.topics}</p>
            {this.formHandler}
            </div>


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

