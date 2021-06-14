import { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	TextInput,
	Dimensions,
	Image,
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword } from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class Login extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'black',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 50,
						fontFamily: 'logo',
						marginTop: 200,
						color: 'white',
						width: screenWidth * 0.9,
						textAlign: 'center',
					}}
				>
					Instaclone
				</Text>
				<View style={{ marginTop: 30 }}>
					<View style={{ width: screenWidth * 0.9, marginTop: 10 }}></View>
					<TextInput
						style={{
							height: 50,
							width: screenWidth * 0.9,
							color: 'white',
							paddingHorizontal: 20,
							margin: 0,
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
					<View style={{ width: screenWidth * 0.9, marginTop: 15 }}></View>
					<TextInput
						style={{
							height: 50,
							width: screenWidth * 0.9,
							color: 'white',
							paddingHorizontal: 20,
							margin: 0,
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
				</View>
				<View
					style={{
						width: screenWidth,
						justifyContent: 'center',
						alignItems: 'center',
						margin: 30,
					}}
				>
					<TouchableOpacity
						style={{
							width: screenWidth * 0.9,
							height: 50,
							opacity: 0.5,
							borderRadius: 5,
							backgroundColor: '#0095f6',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
							Log In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							flexDirection: 'row',
							margin: 10,
							paddingTop: 5,
						}}
						onPress={() => this.props.navigation.navigate('Signup')}
					>
						<Text style={{ fontSize: 13, color: '#ffffff' }}>
							Don't have an account?{' '}
						</Text>
						<Text
							style={{ fontSize: 13, fontWeight: 'bold', color: '#0095f6' }}
						>
							Sign Up.
						</Text>
					</TouchableOpacity>

					<View
						style={{
							position: 'absolute',
							top: 300,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ fontSize: 15, color: '#cccccc' }}>from</Text>
						<Text
							style={{ fontSize: 15, fontWeight: 'bold', color: '#0095f6' }}
						>
							han
						</Text>
					</View>
				</View>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
