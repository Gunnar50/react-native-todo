import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			{/* Today Tasks */}
		 
			<View style={styles.taskWrapper}>
				<Text style={styles.selectionTitle}>Today's tasks</Text>

				<View style={styles.items}>
					{/* Tasks will go here */}

				</View>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
	},
	taskWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	selectionTitle: {
		fontSize: 24,
		fontWeight: "bold"
	},
	items: {}
});
