import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const onButtonClick = () => {
    props.onClickCallback(props.id);
  }

  return(
    <button
      className="square"
      onClick={onButtonClick}
    >
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
