import React, { memo } from "react";
import { View, Text, Image, Pressable } from "react-native";
import moment from "moment";
import tw from "twrnc";

function ActivityItem({ person: { item } }) {
	const handlePress = () => {
		console.log("Pressed!");
	};

	const parseDate = (date) => {
		let currentDate = moment();
		let journalDate = moment(date);
		let difference = currentDate.diff(journalDate, "days");
		return difference < 7 ? moment(date).fromNow() : moment(date).format("ll");
	};

	return (
		<View key={item.email} style={tw.style("flex flex-row grow justify-between py-2 items-center")}>
			<View style={tw.style("flex flex-row gap-x-3 items-center")}>
				<Image style={tw.style("mx-auto h-8 w-8 rounded-full")} src={item.imageUrl} />
				<Text style={tw.style("text-sm font-bold text-gray-900")}>{item.type}</Text>
			</View>
			<View style={tw.style("flex flex-col items-center align-end")}>
				<Text style={tw.style("text-sm text-gray-500")}>{parseDate(item.date)}</Text>
			</View>
		</View>
	);
}

export default memo(ActivityItem);
