import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

const Header = props => {
  return (
    <div className='header'>
    <img src={props.userImage} className='user-thumb' alt={props.username}/>
    <p className='user-name'>{props.authorName}</p>
    </div>
  )
}

Header.propTypes = {
  userImage: PropTypes.string,
  authorName: PropTypes.string
};

export default Header;