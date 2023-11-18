import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ActivityItem from "./ActivityItem";
import tw from "twrnc";

const people = [
	{
		type: "Open Matt",
		focus: "",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-18",
	},
	{
		type: "Class",
		focus: "Bottom Half Guard",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-17",
	},
	{
		type: "Class",
		focus: "dries.vincent@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-16",
	},
	{
		type: "Class",
		focus: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-15",
	},
	{
		type: "Competition",
		focus: "courtney.henry@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-14",
	},
	{
		type: "Private",
		focus: "tom.cook@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-13",
	},
	{
		type: "Class",
		focus: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-12",
	},
	{
		type: "Class",
		focus: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-11",
	},
	{
		type: "Class",
		focus: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-10",
	},
	{
		type: "Class",
		focus: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "2023-11-09",
	},
];

function ActivityList() {
	const keyExtractor = (item, index) => index;
	const renderItem = (person) => <ActivityItem person={person} />;

	return (
		<SafeAreaView style={tw.style("w-full")}>
			<FlatList data={people} renderItem={renderItem} keyExtractor={keyExtractor} />
		</SafeAreaView>
	);
}

export default ActivityList;
