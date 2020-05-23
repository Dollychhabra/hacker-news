import React from 'react';

const Hello = (props) => {
  return (
    <React.Fragment>
      <h1>Hello, {props.name}!</h1>
    </React.Fragment>
  );
};

export default Hello;
