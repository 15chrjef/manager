import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password});
	}
	renderButton() {
		if(this.props.loading) {
			return <Spinner size='large'/>;
		};
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>	
		);
	}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@email.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="123456789"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
					<Text style={styles.errorText}>
						{this.props.error}
					</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}
const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return { error, email, password, loading };
};

export default connect(mapStateToProps, { passwordChanged, emailChanged, loginUser })(LoginForm)