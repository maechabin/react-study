import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      val: this.props.val,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    // this.setState({val: this.refs.myInput.value});
    this.setState((state, props) => {
      window.console.log(state);
      window.console.log(props);
      window.console.dir(this.refs);
      return {
        val: this.myInput.value,
      };
    });
    // console.log(this.refs.myComponent.childNodes[0].textContent);
  }
  render() {
    return (
      <div>
        <HelloMessage>{this.state.val}</HelloMessage>
        <input
          type="text"
          value={this.state.val}
          ref={(ref) => (this.myInput = ref)}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
App.propTypes = {
  val: React.PropTypes.string,
};

function HelloMessage(props) {
  return <div>{props.text} {props.children}</div>;
}
// Validationを定義
HelloMessage.propTypes = {
  text: React.PropTypes.string.isRequired, // string型で必須
  children: React.PropTypes.string.isRequired, // string型で必須
};

// propsのデフォルト値を定義
HelloMessage.defaultProps = {
  text: 'Hello',
  children: 'World',
};

ReactDOM.render(
  <App val="world" />,
  document.querySelector('.content')
);
