import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <>
    <img src={props.userImage} />
    <p>{props.authorName}</p>
    </>
  )
}

Header.propTypes = {
  userImage: PropTypes.string,
  authorName: PropTypes.string
};

export default Header;