import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val: this.props.val};
  }
  handleChange() {
    this.setState({val: this.refs.myInput.value});
//    console.log(this.refs.myComponent.childNodes[0].textContent);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  render() {
    return (
      <div ref="myComponent">
        <HelloMessage text={'Hello'}>{this.state.val}</HelloMessage>
        <input type="text" value={this.state.val} ref="myInput" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

class HelloMessage extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.children);
    console.log(this.props.children);
    console.log(nextProps.children !== this.props.children);
    //return nextProps.children !== this.props.children;
    return true;
  }
  render() {
    return (
      <div>{this.props.text} {this.props.children}</div>
    );
  }

};

ReactDOM.render(
  <App val='world' />,
  document.querySelector('.content')
);
