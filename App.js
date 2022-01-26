import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<Routes nav = {nav => { this.navigator = nav; }}/>
	);
}

export default App;
