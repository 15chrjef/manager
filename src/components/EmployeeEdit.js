import React , { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import _ from 'lodash';

class EmployeeEdit extends Component {
	state = { showModal: false}
	componentWillMount() {
				console.log('asdfasdf', this.props)

		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		})
	}
	onSavePress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}
	onTextPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, 'Your upcoming shift is on ${shift}');
	}
	onAccept() {
		const { uid } = this.props.employee;
		console.log('asdfasdf', uid)
		this.props.employeeDelete({ uid });
	}
	onDecline() {
		this.setState({ showModal: false })
	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props}/>
				<CardSection>
					<Button onPress={this.onSavePress.bind(this)}>
						Save
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.setState.showModal})}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
					visible={this.state.showModal}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		)
	}
}

mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift }
}

export default connect( mapStateToProps, { employeeDelete, employeeUpdate, employeeSave })(EmployeeEdit);