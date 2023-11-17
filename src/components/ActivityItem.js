import React, { memo } from "react";
import { View, Text, Image, Pressable } from "react-native";
import moment from "moment";
import tw from "twrnc";

function ActivityItem({ person: { item } }) {
	const handlePress = () => {
		console.log("Pressed!");
	};

	return (
		<View key={item.email} style={tw.style("flex flex-row grow justify-between py-2 border-2 border-red-200")}>
			{/* <View style={tw.style("flex min-w-0 gap-x-4")}>
				<Image style={tw.style("h-6 w-6 flex-none rounded-full bg-gray-50")} src={item.imageUrl} />
				<View style={tw.style("min-w-0 flex-auto")}>
					<Text style={tw.style("text-xs font-semibold leading-6 text-gray-900")}>{item.name}</Text>
					<Text style={tw.style("mt-1 truncate text-xs leading-5 text-gray-500")}>{item.email}</Text>
				</View>
			</View> */}
			<View style={tw.style("flex flex-row gap-x-2")}>
				<Image style={tw.style("mx-auto h-8 w-8 rounded-full mr-2")} src={item.imageUrl} />
				<View style={tw.style("mx-auto align-middle")}>
					<Text style={tw.style("text-xs font-bold text-gray-900")}>{item.name}</Text>
					<Text style={tw.style("text-xs font-medium text-gray-600")}>BELT HERE</Text>
				</View>
			</View>
			<View style={tw.style("flex flex-col items-end align-end")}>
				<Text style={tw.style("text-xs text-gray-900")}>{item.role}</Text>
				<Text style={tw.style("text-xs text-gray-500")}>Last seen</Text>
			</View>
		</View>
	);
}

export default memo(ActivityItem);
