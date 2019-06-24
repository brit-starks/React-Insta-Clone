import React from 'react';

class AddNewComment extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.input);
    this.setState({input: ''});
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          name='input'
          placeholder='Add a comment...'
          value={this.state.input}
          onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default AddNewComment;
