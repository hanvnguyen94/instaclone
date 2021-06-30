import React from 'react'
import { Component } from 'react'
import { StatusBar } from 'expo-status-bar'

import * as firebase from 'firebase'

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

class Welcome extends React.Component {
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.props.getUser(user.uid)
				if (this.props.user !== null) {
					this.props.naviation.navigate('StackNavigator')
					this.props.navigation.reset({
						index: 0,
						routes: [{ name: 'StackNavigator' }],
					})
				}
			} else {
				this.props.navigation.navigate('Login')
			}
		})
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>Waiting</Text>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch)
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
