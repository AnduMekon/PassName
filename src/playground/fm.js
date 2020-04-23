import React from 'react';
import ReactDOM from 'react-dom'
console.log('app.js is running');

const app = {
    title: 'Indecision Andualem',
    subtitle: 'Put your life on the hands of a computer',
    options: []
};




var appRoot = document.getElementById('app');

const render = () => {
    const  templateone = (
        <div>
        <h1>{app.title}</h1>
        <p> {app.options.length > 0  ? 'your options':'no options'} </p>
        <p>{app.options.length}</p>

        
        </div>



    )

ReactDOM.render(templateone, appRoot);

};
render();


