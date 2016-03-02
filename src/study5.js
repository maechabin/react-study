import React from 'react';
import ReactDOM from 'react-dom';
import { Map, List } from 'immutable';
import { Dispatcher } from 'flux';
import { MapStore, Container } from 'flux/utils';

// Dispatcher
const dispatcher = new Dispatcher();

// Action
const act = {
  HANDLECHANGE: 'handleChange'
};
const AppAction = {
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
    return Map({
      'value': null
    });
  }
  reduce(state, action) {
    console.dir('state: ' + state);
    console.dir('action: ' + action);
    switch (action.type) {
      case act.HANDLECHANGE:
        return {
          'value': action.value
        };
    }
  }
}

// Storeのインスタンス生成
const appStore = new AppStore(dispatcher);

// View
class App extends React.Component {
  static getStores() {
    return [appStore];
  }
  static calculateState(prevState) {
    console.log(appStore.get('value'));
    return appStore.getState();
  }
  _handleChange(e) {
    e.preventDefault();
    AppAction.handleChange(this.refs.myInput.value.trim());
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
