import React from 'react';
import AddNewComment from './AddNewComment';

class NewCommet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  };

  render(){
    console.log(this.state);
    return(
      <div className='new-comment'>
        <form>
          <input 
          type='text' placeholder='Add comment' name='input' value={this.state.input} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddNewComment;