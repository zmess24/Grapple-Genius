import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const user = {
	name: "Zac Messinger",
	role: "White Belt",
	imageUrl:
		"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
// const stats = [
// 	{ label: "Vacation days left", value: 12 },
// 	{ label: "Sick days left", value: 4 },
// 	{ label: "Personal days left", value: 2 },
// ];

function Profile() {
	return (
		<View style={tw.style("overflow-hidden rounded-lg bg-white shadow")}>
			<View style={tw.style("bg-white flex flex-row border-solid border-2 border-indigo-600")}>
				<Image style={tw.style("mx-auto h-15 w-15 rounded-full")} src={user.imageUrl} />
				<View style={tw.style("mx-auto align-middle border-solid border-2 border-red-600")}>
					<Text style={tw.style("text-xl font-bold text-gray-900")}>{user.name}</Text>
					<Text style={tw.style("text-sm font-medium text-gray-600")}>{user.role}</Text>
				</View>
				{/* <View style={tw.style("sm:flex sm:items-center sm:justify-between")}>
					<View style={tw.style("sm:flex sm:space-x-5")}>
						<View style={tw.style("flex-shrink-0")}>
							<Image style={tw.style("mx-auto h-20 w-20 rounded-full")} src={user.imageUrl} alt="" />
						</View>
						<View style={tw.style("mt-4 text-center")}>
							<Text style={tw.style("text-sm font-medium text-gray-600")}>Welcome back,</Text>
							<Text style={tw.style("text-xl font-bold text-gray-900 sm:text-2xl")}>{user.name}</Text>
							<Text style={tw.style("text-sm font-medium text-gray-600")}>{user.role}</Text>
						</View>
					</View>
				</View> */}
			</View>
			{/* <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
				{stats.map((stat) => (
					<div key={stat.label} className="px-6 py-5 text-center text-sm font-medium">
						<span className="text-gray-900">{stat.value}</span> <span className="text-gray-600">{stat.label}</span>
					</div>
				))}
			</div> */}
		</View>
	);
}

export default Profile;
