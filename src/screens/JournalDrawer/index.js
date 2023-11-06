import React from "react";
import { Text, View, Dimensions } from "react-native";
import BottomDrawer from "react-native-animated-bottom-drawer";

function JournalDrawer({ bottomDrawerRef }) {
	const windowHeight = Dimensions.get("window").height * 0.95;
	return (
		<BottomDrawer ref={bottomDrawerRef} initialHeight={windowHeight}>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Text>Awesome 🎉</Text>
			</View>
		</BottomDrawer>
	);
}

export default JournalDrawer;
