import { Map } from 'immutable';

var map = Map([
  ["key", "value"]
]);

//console.log(map.get('key'));

map = map.set('key2', 'value2');

//console.log(map.get('key2'));

map = map.update('key', () => {
  return 'value4'
});

//console.log(map.get('key'));


function getInitialState() {
  return Map([
    ['key1', 'value1'],
    ['key2', 'value2']
  ]);
}

var state = getInitialState();

console.log(state.get('key1'));

function updateState(value) {
  if (state !== state.update('key1', () => value)) {
    return state.update('key1', () => value)
  };
}

state = updateState('value3');
console.log(state.get('key1'));
console.log(state.get('key2'));

if (state !== state.set('key2', 'value4')) {
  state = state.set('key2', 'value4')
};

console.log(state.get('key2'));


// immutale使わない

function getInitialState2() {
  return {
    'key1': 'value1'
  }
}

var state2 = getInitialState2();

console.log(state2);

var state3 = state2;
state3.key1 = 'value2';

console.log(state2 === state3);


function updateState2(value) {

  if (state2 !== state2) {
    return state.update('key1', () => value)
  };
}


var state5 = {
  'foo': 'bar',
  'a': 'b'
}

var state6 = state5;
state6.foo = 'baz';

console.log(state5.foo);
console.log(state5 === state6);


var state3 = Map([
  ['foo', 'bar']
]);

var state4 = state3.set('foo', 'baz');

console.log(state4.get('foo'));
