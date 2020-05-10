import React from "react";
import ReactDOM from 'react-dom';


class HnadlerOnChange extends React.Component {
   state = {
        countries:[]
   }
   addCountry(){
       this.setState({countries:[...this.state.countries, '']})
   }
   handleChange(e, index){
       this.state.countries[index] = e.target.value
       //set the change state
       this.setState({countries:this.state.countries})
   }
   handleRemove(index){
       this.state.countries.splice(index,1)
       console.log(this.state.countries, '$$$$');
       //update the state
       this.setState({countries:this.state.countries})
   }
   handleSubmit(e) {
       console.log(this.state.countries, '$$$$')


   }
       render()   {
        return (
            <div className="">
                <h1>The Form</h1>
                <label>Address</label>
                {this.state.countries.map((Country , index)=> {
                    return (
                        <div key={index}> 
                            <input onChange={(e) => this.handleChange(e, index)}   value={Country} />
                            <button onClick={()=>this.handleRemove(index)}>Remove</button>
                        </div>
                        
                    )
                
                    })
            }
                <hr />
                <button onClick={(e)=>this.addCountry(e)}>Add Country</button>
                <hr />
                <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
                
                <hr />
                <h1>Arry list on Submit</h1>
                {this.state.countries.map((Country)=> <p  key={Country}>{Country}</p>)}
            </div>
        )

       }
   
        
    }




ReactDOM.render(<HnadlerOnChange />, document.getElementById('app'))