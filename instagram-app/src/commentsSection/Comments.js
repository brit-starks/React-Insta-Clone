import React from 'react';

const Comments = props => {
  console.log(props, 'comments');
  return(
    <>
    {props.comments.map(comment => {
      return(
        <div className='post-comments'>
        {comment.username}
        {comment.text}
        </div>
      )
    })}
    </>
  );
}



export default Comments;