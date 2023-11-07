import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Profile from "../../components/Profile";
import moment from "moment";

function HomeScreen() {
	return (
		<View style={tw.style("flex flex-col justify-between grow bg-white pl-6 pr-6 pt-15")}>
			<View style={tw.style("flex flex-col items-start")}>
				<Text style={tw.style("text-xl font-bold tracking-tight text-gray-400")}>Week</Text>
				<Text style={tw.style("text-3xl font-bold tracking-tight")}>06 March</Text>
			</View>
			<View style={tw.style("flex flex-col items-start")}>
				<Profile />
			</View>
			<View style={tw.style("flex flex-col items-start")}>
				<Text style={tw.style("text-xl font-bold tracking-tight")}>Recent Activity</Text>
			</View>
		</View>
	);
}

export default HomeScreen;
