import React, { useEffect } from 'react';
import { setCurrentUser } from './redux/User/user.actions';
import withAuth from './hoc/withAuth';
import { useDispatch, useSelector } from 'react-redux';
import { auth, handleUserProfile } from './firebase/utils';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './default.scss';
// hoc
<<<<<<< HEAD


=======
import Directory from './components/Directory';
import withAuth from './hoc/withAuth';
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b
import Recovery from './pages/Recovery';
import Homepage from './pages/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
<<<<<<< HEAD
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
=======

import { setCurrentUser } from './redux/User/user.actions';
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b
import Header from './components/Header';

//const initialState = {
//	currentUser: null
//};

const App = (props) => {
	//const dispatch = useDispatch();

	//useEffect(() => {
	//const authListener = auth.onAuthStateChanged(async (userAuth) => {
	//if (user) {
	//	this.setState({ currentUser: user });
	//	localStorage.setItem('user', user.uid);
	//} else {
	//	this.setState({ currentUser: null });
	//	localStorage.removeItem('user');
	//}
	//if (userAuth) {
	//	const userRef = await handleUserProfile(userAuth);
	//	userRef.onSnapshot((snapshot) => {
	//dispatch(setCurrentUser({
	//	id: snapshot.id,
	//	...snapshot.data()
	//}));
	//	});
	//}
	//dispatch(setCurrentUser(userAuth));
	//});
	//return () => {
	//	authListener();
	//};
	//}, []);
	return (
		<Router>
			<div className="app">
			<Header />
				<div className="main">
				
				<Switch>
					<Route exact path="/" render={() => <Homepage />} />

					<Route path="/signup" render={() => <Signup />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="/recovery" render={() => <Recovery />} />
					<Route
						path="/dashboard"
						render={() => (
							<withAuth>
								{' '}
								<Dashboard />{' '}
							</withAuth>
						)}
					/>
				</Switch>
<<<<<<< HEAD
				{/*<Footer />*/}
				</div>
=======
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b
			</div>
		</Router>
	);
};

export default App;
