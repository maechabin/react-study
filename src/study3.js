import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val: this.props.val};
  }
  handleChange() {
    this.setState({val: this.refs.myInput.value});
    console.log(this.refs.myComponent.childNodes[0].textContent);
  }
  render() {
    return (
      <div ref="myComponent">
        <HelloMessage>{this.state.val}</HelloMessage>
        <input type="text" value={this.state.val} ref="myInput" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

function HelloMessage(props) {
  return <div>{props.text} {props.children}</div>;
};

// Validationを定義
HelloMessage.propTypes = {
  text: React.PropTypes.string.isRequired, // string型で必須
  children: React.PropTypes.string.isRequired // string型で必須
};

// propsのデフォルト値を定義
HelloMessage.defaultProps = {
 text: 'Hello',
 children: 'World'
};

ReactDOM.render(
  <App val='world' />,
  document.querySelector('.content')
);
