import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
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
    return Map([
      ['value', null]
    ]);
//    return {
//      'value': null
//    };
  }
  reduce(state, action) {
    console.dir('state: ' + state);
    //console.dir('action: ' + action);
    switch (action.type) {
      case act.HANDLECHANGE:
        return state.set('value', action.value);
//        return {
//          'value': action.value
//        };
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
    //console.log(prevState);
    //console.log(appStore.at('value'));
    //console.log(appStore.get('value'));
    //console.log(appStore._state.get('value'));
    //console.log(appStore.getAll('value', prevState));
    //return appStore.get('value');
    //console.log(appStore.areEqual(appStore.getAll(), prevState));
    console.log(appStore.getState());
    console.log(prevState);
    return {
      value: appStore.get('value')
    }
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
    //console.log(nextProps.children);
    //console.log(this.props.children);
    //console.log(nextProps.children !== this.props.children);
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
