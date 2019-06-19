import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return(
    <>
      <img src={props.image} />
      <p>{props.likes}</p>
    </>
  );
}


Post.propTypes = {
 image: PropTypes.string,
 likes: PropTypes.number
};

export default Post;