import React from 'react';

const Comments = props => {
  console.log(props, 'comments');
  return(
    <>
    {props.comments.map(comment => {
      return(
        <>
        {comment.username}
        {comment.text}
        </>
      )
    })}
    </>
  );
}



export default Comments;