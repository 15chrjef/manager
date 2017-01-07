import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 55}}>
			<Scene key='auth'>
				<Scene key='login' component={LoginForm} initial title='Please Login'/>
			</Scene>
			<Scene key='main'>
				<Scene 
					onRight={() => Actions.employeeCreate()}
					rightTitle='Add' 
					key='employeeList' 
					component={EmployeeList} 
					title='Employees'
				/>
				<Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee'>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;