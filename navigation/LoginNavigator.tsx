import * as React from 'react'
import { View, Text } from 'react-native'
import { useFonts } from '@use-expo/font'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/Signup'

const Stack = createStackNavigator()

export default function App() {
	let [fontsLoader] = useFonts({
		logo: require('../assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
	})

	if (!fontsLoader) {
		return <View />
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Login'
						component={Login}
						options={{ headerShown: false, title: 'Login' }}
					/>
					<Stack.Screen
						name='Signup'
						component={Signup}
						options={{ headerShown: true }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}
