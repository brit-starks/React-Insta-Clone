import React from 'react';
import AddNewComment from './AddNewComment';
import './comments.css';

class Comments extends React.Component {
  constructor(){
    super();
    this.state ={
      comment: '',
      username: ''
    };
  }
  
  addComment = (comment) => {
    let newComment = {comment: this.state.comment, username:' brit'}
    
    this.setState({ comments:[...this.state.comment, newComment]});
    console.log(this.state.comment);
  };

    render(){
      return(
        <>
          <AddNewComment addComment={this.addComment} />
          <>
            {props.comments.map(comment => {
              // console.log(props.comments);
              return(
                <div className='post-comments'>
                  <div className='commenter-username'>
                    {comment.username}
                  </div>
                  <div className='comment'>
                    {comment.text}
                  </div>
                </div>
              )
            })}
        </>
    </>
  );
}
}


export default Comments;