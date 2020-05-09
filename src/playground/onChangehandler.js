import React from "react";
import ReactDOM from 'react-dom';

class HnadlerOnChange extends React.Component {
    render() {
        return(

            <form>
            <label>
              First name
              <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </label>
          </form>
        )
    }
}



ReactDOM.render(<HnadlerOnChange />, document.getElementById('app'))