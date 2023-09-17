import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
	const [task, setTask] = useState("");
	const [taskItems, setTaskItems] = useState([]);

	const handleAddTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask("");
	}

	const completeTask = (idx) => {
		const itemsCopy = [...taskItems];
		itemsCopy.splice(idx, 1);
		setTaskItems(itemsCopy);
	}

	return (
		<View style={styles.container}>
			{/* Today Tasks */}
		 
			<View style={styles.taskWrapper}>
				<Text style={styles.selectionTitle}>Today's tasks</Text>

				<View style={styles.items}>
					{/* Tasks will go here */}
					{taskItems.map((item, idx) => {
						return (

							<TouchableOpacity onPress={() => completeTask(idx)}>
								<Task key={idx} text={item}/>
							</TouchableOpacity>	

						)
					})}
					

				</View>
			</View>

			{/* Write a task */}
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? "padding" : "height"}
				style={styles.writeTaskWrapper}
			>
				<TextInput style={styles.input} placeholder="Write a Task" value={task} onChangeText={text => setTask(text)}></TextInput>

				<TouchableOpacity onPress={handleAddTask}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>

			</KeyboardAvoidingView>


		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fefefe',
	},
	taskWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	selectionTitle: {
		fontSize: 24,
		fontWeight: "bold"
	},
	items: {
		marginTop: 20,
	},
	writeTaskWrapper: {
		position: "absolute",
		bottom: 60,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
	},
	input: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: "#eee",
		borderRadius: 50,
		width: 250,
		borderColor: "#c0c0c0",
		borderWidth: 1,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: "#eee",
		borderColor: "#c0c0c0",
		borderWidth: 2,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	addText: {
		fontSize: 30
	},
});
