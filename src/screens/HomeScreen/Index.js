import React from "react";
import { Text, View, Dimensions } from "react-native";
import tw from "twrnc";
import Profile from "../../components/Profile";
import Stats from "./components/Stats";
import ActivityList from "../../components/ActivityList";
import moment from "moment";

function HomeScreen() {
	return (
		<View style={tw.style("flex grow bg-white pt-15 px-4")}>
			<View style={tw.style("flex flex-col items-start mb-5")}>
				{/* <Text style={tw.style("text-xl font-bold tracking-tight text-gray-400")}>Activity</Text> */}
			</View>
			<View style={tw.style("flex flex-col items-start mb-5")}>
				<Profile />
			</View>
			<View style={tw.style("flex flex-col w-90 mb-5")}>
				<Text style={tw.style("text-base font-semibold leading-6 text-gray-900")}>Progress</Text>
				<Stats />
			</View>
			<View style={tw.style("flex flex-col w-90 mb-5")}>
				<Text style={tw.style("text-base font-semibold text-gray-900")}>Recent Activity</Text>
				<ActivityList />
			</View>
		</View>
	);
}

export default HomeScreen;
