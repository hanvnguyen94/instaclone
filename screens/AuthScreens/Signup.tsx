import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	updateEmail,
	updatePassword,
	updateUsername,
	signup,
} from '../../actions/user'

const screenWidth = Dimensions.get('window').width

class Signup extends Component {
	state = {
		repeat: '', // is the repeat password
	}

	onLoginPress = () => {
		if (
			this.props.user.password === this.state.repeat &&
			this.props.user.username !== ''
		) {
			this.props.signup()
		} else {
			alert('wrong password')
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{/* user name */}
				{/* <View style={{ width: screenWidth * 0.9, marginTop: 10 }}></View> */}
				<TextInput
					style={{
						height: 50,
						width: screenWidth * 0.9,
						color: 'white',
						paddingHorizontal: 20,
						borderRadius: 5,
						borderColor: 'grey',
						borderWidth: 1,
					}}
					placeholderTextColor={'grey'}
					placeholder={'Username'}
					// value={this.props.user.email}
					// onChangeText={input=>this.props.updateEmail(input)}
					onChangeText={(input) => this.props.updateUsername(input)}
					value={this.props.user.username}
				/>

				{/* email */}

				{/* <View style={{ width: screenWidth * 0.9, marginTop: 10 }}></View> */}
				<TextInput
					style={{
						height: 50,
						width: screenWidth * 0.9,
						color: 'white',
						paddingHorizontal: 20,
						marginTop: 15,
						borderRadius: 5,
						borderColor: 'grey',
						borderWidth: 1,
					}}
					placeholderTextColor={'grey'}
					placeholder={'example@example.com'}
					// value={this.props.user.email}
					// onChangeText={input=>this.props.updateEmail(input)}
					onChangeText={(input) => this.props.updateEmail(input)}
					value={this.props.user.email}
				/>

				{/* password */}
				{/* <View style={{ width: screenWidth * 0.9, marginTop: 15 }}></View> */}
				<TextInput
					style={{
						height: 50,
						width: screenWidth * 0.9,
						color: 'white',
						paddingHorizontal: 20,
						marginTop: 15,
						borderRadius: 5,
						borderColor: 'grey',
						borderWidth: 1,
					}}
					placeholderTextColor={'grey'}
					placeholder={'Password'}
					// value={this.props.user.password}
					onChangeText={(input) => this.props.updatePassword(input)}
					value={this.props.user.password}
					// onChangeText={input=>this.props.updatePassword(input)}
					secureTextEntry={true}
				/>

				{/* password confirmation */}
				{/* <View style={{ width: screenWidth * 0.9, marginTop: 15 }}></View> */}
				<TextInput
					style={{
						height: 50,
						width: screenWidth * 0.9,
						color: 'white',
						paddingHorizontal: 20,
						marginTop: 15,
						borderRadius: 5,
						borderColor: 'grey',
						borderWidth: 1,
					}}
					placeholderTextColor={'grey'}
					placeholder={'Confirm password'}
					// value={this.props.user.password}
					onChangeText={(input) => this.setState({ repeat: input })}
					value={this.state.repeat}
					// onChangeText={input=>this.props.updatePassword(input)}
					secureTextEntry={true}
				/>

				<TouchableOpacity
					style={{
						width: screenWidth * 0.9,
						height: 50,
						opacity: 0.5,
						borderRadius: 5,
						backgroundColor: '#087fda',
						justifyContent: 'center',
						alignItems: 'center',
						margin: 20,
					}}
					onPress={() => this.onLoginPress()}
				>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ updateEmail, updatePassword, updateUsername, signup },
		dispatch
	)
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
