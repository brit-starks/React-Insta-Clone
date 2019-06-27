import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return(
    <div className='post'>
      <img width='1000' src={props.image} />
      <p className='likes'>{props.likes} likes</p>
    </div>
  );
}


Post.propTypes = {
 image: PropTypes.string,
 likes: PropTypes.number
};

export default Post;