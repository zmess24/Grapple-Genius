import { Text, View } from "react-native";
import tw from "twrnc";

// import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from "@heroicons/react/24/outline";

const stats = [
	{ id: 1, name: "Week", stat: "3", change: "122", changeType: "increase" },
	{ id: 2, name: "Year", stat: "12", change: "122", changeType: "increase" },
];

export default function Stats() {
	return (
		<View>
			<View style={tw.style("mt-5 flex-row justify-between gap-5")}>
				{stats.map((item) => (
					<View key={item.id} style={tw.style("border-1 border-red-200 rounded-lg bg-white px-5 w-40 shadow-md")}>
						<View>
							{/* <View style={tw.style("absolute rounded-md bg-indigo-500 p-3")}>
								<item.icon style={tw.style("h-6 w-6 text-white")} aria-hidden="true" />
							</View> */}
							<Text style={tw.style("truncate text-sm font-medium text-gray-500")}>{item.name}</Text>
						</View>
						<View className="ml-16 flex items-baseline pb-6 sm:pb-7">
							<Text style={tw.style("text-2xl font-semibold text-gray-900")}>{item.stat}</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
