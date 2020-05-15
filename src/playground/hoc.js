import React from 'react';
import ReactDOM from 'react-dom';

const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)
ReactDOM.render(<info />, document.getElementById('app'))