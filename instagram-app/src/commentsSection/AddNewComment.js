import React from 'react';

class AddNewComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: this.props.comments && this.props.comments,
      comment: ''
    
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  addComment = (comment) => {
    let newComment = {comment: this.state.comment, username:' brit'}

    this.setState({ comments:[...this.state.comments, comment]});
  };

  handleSubmit = (e, comment) => {
    e.preventDefault();
    // this.props.addComment(this.state.comment);
    // this.setState({comment: this.state.comment});
    this.addComment(comment)
  //   console.log(this.state.comment);
  //   console.log(this.state.comments)
  };

  render(){
    console.log(this.state)
    return(
      <div>
        
        {this.state.comments && this.state.comments.map(comment => ( 
          <>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
          </>
        ))}

        <form onSubmit={(e, comment) => this.handleSubmit(e, comment)}>
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
