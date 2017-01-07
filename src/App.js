import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyDgVCC3iUmTqtmU0DJVzB0aiMJJokdPPRo",
			authDomain: "manager-ef331.firebaseapp.com",
			databaseURL: "https://manager-ef331.firebaseio.com",
			storageBucket: "manager-ef331.appspot.com",
			messagingSenderId: "83641914308"
		};
		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		)
	}
}

export default App;