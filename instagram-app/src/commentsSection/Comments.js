import React from 'react';
import './comments.css';

const Comments = props => {
  // console.log(props, 'comments');
  return(
    <>
    {props.comments.map(comment => {
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
  );
}



export default Comments;