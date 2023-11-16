import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const user = {
	name: "Zac Messinger",
	role: "White Belt",
	imageUrl:
		"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function Profile() {
	return (
		<View style={tw.style("rounded-lg bg-white")}>
			<View style={tw.style("bg-white flex flex-row border-solid")}>
				<Image style={tw.style("mx-auto h-12 w-12 rounded-full mr-2")} src={user.imageUrl} />
				<View style={tw.style("mx-auto align-middle border-solid")}>
					<Text style={tw.style("text-xl font-bold text-gray-900")}>{user.name}</Text>
					<Text style={tw.style("text-sm font-medium text-gray-600")}>{user.role}</Text>
				</View>
			</View>
		</View>
	);
}

export default Profile;
