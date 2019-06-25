import React from 'react';

class AddNewComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.addComment(this.state.comment);
    this.setState({comments: [...this.state.comments, {text: this.state.comment, username:' brit'}]});
    console.log(this.state.comment);
  };

  render(){
    return(
      <div>
        
        {this.props.comments.map(comment =>( 
          <>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
          </>
        ))}

        <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          name='comment'
          placeholder='Add a comment...'
          value={this.state.comment}
          onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default AddNewComment;
