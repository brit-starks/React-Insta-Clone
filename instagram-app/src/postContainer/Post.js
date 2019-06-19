import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return(
    <img src={props.image} />
  );
}

Post.propTypes = {
 image: PropTypes.string
};

export default Post;