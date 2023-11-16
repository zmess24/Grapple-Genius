import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Profile from "../../components/Profile";
import Stats from "./components/Stats";
import moment from "moment";

function HomeScreen() {
	return (
		<View style={tw.style("flex flex-col grow bg-white px-6 pt-15")}>
			<View style={tw.style("flex flex-col items-start mb-5")}>
				{/* <Text style={tw.style("text-xl font-bold tracking-tight text-gray-400")}>Activity</Text> */}
			</View>
			<View style={tw.style("flex flex-col items-start mb-5")}>
				<Profile />
			</View>
			<View style={tw.style("flex flex-col items-start mb-5")}>
				<Text style={tw.style("text-base font-semibold leading-6 text-gray-900")}>Progress</Text>
				<Stats />
			</View>
			<View style={tw.style("flex flex-col items-start mb-5")}>
				<Text style={tw.style("text-base font-semibold leading-6 text-gray-900")}>Recent Activity</Text>
			</View>
		</View>
	);
}

export default HomeScreen;
