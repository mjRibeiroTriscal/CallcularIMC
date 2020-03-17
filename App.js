import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import AdsBanner from './src/components/AdsBanner'
import Sum from './src/components/Sum'

export default class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Sum />
				<AdsBanner />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: 24,
	},
})
