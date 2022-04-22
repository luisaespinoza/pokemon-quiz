import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  return (
    <Link to={props.linkText}>
      <Button text={props.buttonText} />
    </Link>
  );
}

export default LinkButton;
