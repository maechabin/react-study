import React from 'react';
import ReactDOM from 'react-dom';
import { Dispatcher } from 'flux';
import { ReduceStore, Container } from 'flux/utils';

// Dispatcher
const dispatcher = new Dispatcher();

// Action
const act = {
  HANDLECHANGE = 'handleChange'
};
const appAction = {
  handleChange(val) {
    dispatcher.dispatch({
      type: act.HANDLECHANGE,
      value: val
    });
  }
};

// Store
class AppStore extends MapStore {
  getInitialState() {
    return {
      'value': null
    }
  }
  reduce(state, action) {
    switch (action.type) {
      case act.HANDLECHANGE:
        return {
          'value': action.value
        }
    }
  }
}

// View
class App extends React.Componen {
  static getStores() {
    return [AppStore];
  }
  static calculateState(prevState) {
    return AppStore.getState();
  }
  _handleChange(e) {
    e.preventDefault();
    appAction.HANDLECHANGE(this.refs.myInput.value.trim())
  }
  render() {
    return (
      <div ref="myComponent">
        <HelloMessage text={'Hello'}>{this.state.value}</HelloMessage>
        <input type="text" value={this.state.value} ref="myInput" onChange={this._handleChange.bind(this)} />
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

// Container
const AppContainer = Container.create(App);

ReactDOM.render(
  <AppContainer />,
  document.querySelector('.content')
);
