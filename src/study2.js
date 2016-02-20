import React from 'react';
import ReactDOM from "react-dom";

// Or with destructuring and an implicit return, simply:
/*
const Aquarium = (props) => (
  <div>
    {props.species}
  </div>
);
*/
var Text = (props) => {
  return <div>{props.children}</div>;
};
Text.propTypes = {
  val: React.PropTypes.string,
  children: React.PropTypes.string
};

// Then use: <Aquarium species="rainbowfish" />
ReactDOM.render(
  <Text val='Hello'>World</Text>, document.querySelector('.content')
);
