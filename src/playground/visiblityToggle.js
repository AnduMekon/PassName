import React from 'react';
import ReactDOM from 'react-dom';

class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
     this.state = { 
         visiblity: false
      }   
    }

    
    render() { 
        return ( 
            <button onClick={handelVisiblity}></button>
         );
    }
}
 
ReactDOM.render(VisiblityToggle, document.getElementById('app'))