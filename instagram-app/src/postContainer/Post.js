import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return(
    <div className='post'>
      <img src={props.image} />
      <p>{props.likes}</p>
    </div>
  );
}


Post.propTypes = {
 image: PropTypes.string,
 likes: PropTypes.number
};

export default Post;