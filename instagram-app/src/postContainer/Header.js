import React from 'react';

const Header = props => {
  return (
    <>
    <img src={props.avatar} />
    <p>{props.authorName}</p>
    </>
  )
}

export default Header;