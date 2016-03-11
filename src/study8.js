import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RaisedButton, TextField, FontIcon } from 'material-ui';


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const MyAwesomeReactComponent = () => (
  <div>
    <RaisedButton label="Default" />
    <RaisedButton
      label="Primary"
      primary={true}
      linkButton={true}
      href="https://github.com/callemall/material-ui"
      target="_blank"
    />
    <RaisedButton label="Secondary" secondary={true} icon={<FontIcon className="muidocs-icon-custom-github" />} />
    <RaisedButton label="Disabled" disabled={true} />
    <TextField
      disabled={false}
      hintText="Disabled Hint Text"
    />
  </div>
);

render(
  <MyAwesomeReactComponent />,
  document.querySelector('.content')
);
