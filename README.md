# State management in React using Redux

## Requirements

```bash
npm install redux react-redux

```

## Vocabulary:

* Store: A globalize State it takes the reducer function as argument.
* Reducers: A function that takes two arguments the state and the action
	and returns the new state it discribes how the action transfer
	the current State to the next State.
* Actions: It is a Javascript Object the has a type and payload, and it
   	describes What you want to do.
* Dispatch

## Creating the Store

```javascript
import { createStore, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

```

# How to use Redux to manage the state in React JS

## Create the Actions

An action is an object that describes what do you want to do, most of the times your actions will have a property called *type*

Ex:

```javascript
function increment() {
    return {
	type: 'INCREMENT'
    }
}

function decrement() {
    return {
	type: 'DECREMENT'
    }
}

```

your actions can have optionaly a pyload attribute what holdes informations on how the next state will change

Ex:

```javascript
function increment(amount) {
    return {
	type: 'INCREMENT',
	payload: amount
    }
}

function decrement(amount) {
    return {
	type: 'DECREMENT',
	payload: amount
    }
}

```

## Create the Reducers

A reducer is a function that describer how the current state would change to the next state, it takes as arguments the current State and the action and depending on the actions' type you determine the next State

Ex:

```javascript
function counterReducer(state=0, action) {
    switch(action.type) {
	case 'INCREMENT':
	    return state + 1;
	case 'DECREMENT':
	    return state - 1;
	default:
	    return state;
    }
}

```

## Creating the Store

A store is a globalized State, and to create a store you use the createStore function which you import from redux, it takes one argument which is the reducer function

```javascript
import { createStore } from 'redux';
import counterReducer from './path/to/counterReducer';

const store = createStore(counterReducer)

```

As you can see the createState function takes only one reducer fucntion and each reducer function represent a piece of state, but what if you have multiple reducer function in that case you use the combineReducers and passe it all the reducers as an object

Ex:

Let's say we have to reducers the counterReducer and the userStateReducer

```javascript
import { createStore, combineReducers } from 'redux';
import counterReducer from './path/to/counterReducer';
import userStateReducer from './path/to/userStateReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    userState: userStateReducer	
});

const store = createStore(rootReducer);

```

## Using the state in the components

Now that we have created all the Actions, Reducers and we have created the store, now how do we actually use the state, to use the state in one of out components we wrap all the compnenets we want to have access to the store in the Provider which we import from 'react-redux' and takes one prop called store and it takes our store as a value

Ex:

```javascript
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

Now all the compnenets that are contained within the App component will have access to the store, for example the Counter compnenet, would use the couter state like the following:

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Actions/counterActions';


function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    function handleIncrement(e) {
	dispatch(increment())
    }

    function handleDecrement(e) {
	dispatch(decrement())
    }

    return (
	<div>
	    <h1>Counter: {counter}</h1>
	    <button onClick={handleIncrement}>+</button>
	    <button onClick={handleDecrement}>-</button>
	</div>
    )
}


export default Counter;

```
