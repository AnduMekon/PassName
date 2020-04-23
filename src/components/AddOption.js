import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option, description);
    const description = e.target.elements.description.value.trim()
    

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
      e.target.elements.description.value= '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" placeholder="task" type="text" name="option" />
          
        <input  className="add-option__input" type="text" placeholder="description" name="description" />
          
        <input  className="add-option__input" type="text" placeholder="Priority" name="Priority" />
        

          <button className="button">Add Task</button>
        </form>
      </div>
    );
  }
}
