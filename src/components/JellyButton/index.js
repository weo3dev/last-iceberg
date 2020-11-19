import React from 'react';

const JellyButton = (props) => {

  // buttonTextOne
  // buttonTextTwo
  // buttonStyle 
  // buttonMethod
  // buttonLink

  const classList = `button-jelly ${props.buttonStyle}`;
  const addBreak = props.addBreak;
  
  return (
    <button type={props.buttonType} className={classList} onClick={() => props.buttonMethod()}>
      {props.buttonTextOne}
      {addBreak ? <br /> : ' '}
      {props.buttonTextTwo}
    </button>
  );
}

export default JellyButton;