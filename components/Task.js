import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Task(props) {

	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<TouchableOpacity style={styles.square}></TouchableOpacity>
				<Text style={styles.itemText}>{props.text}</Text>
			</View>

			<View style={styles.circular}></View>

		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "lightblue",
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	itemLeft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	square: {
		backgroundColor: "#aaaa99",
		opacity: 0.4,
		width: 20,
		height: 20,
		borderRadius: 5,
		marginRight: 15,
		
	},
	itemText: {
		maxWidth: "80%",
		
	},
	circular: {
		width: 12,
		height: 12,
		borderColor: "#aaaa99",
		borderWidth: 2,
		borderRadius: 5,

	},
})