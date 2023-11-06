import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import moment from "moment";

function SettingsScreen() {
	return (
		<View style={tw.style("flex flex-col justify-between grow bg-white pl-3 pr-3 pt-15")}>
			<Text>Settings Screen</Text>
		</View>
	);
}

export default SettingsScreen;
