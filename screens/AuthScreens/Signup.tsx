import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Signup extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Login')}
				>
					<Text>Go to Login page</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
