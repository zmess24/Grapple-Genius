import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ActivityItem from "./ActivityItem";
import tw from "twrnc";

const people = [
	{
		type: "Open Matt",
		email: "leslie.alexander@example.com",
		role: "Co-Founder / CEO",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "Nov 17th, 2023",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		type: "Class",
		email: "michael.foster@example.com",
		role: "Co-Founder / CTO",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "Nov 16th, 2023",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		type: "Class",
		email: "dries.vincent@example.com",
		role: "Business Relations",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "Nov 14, 2023",
	},
	{
		type: "Class",
		email: "lindsay.walton@example.com",
		role: "Front-end Developer",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "Nov 13th, 2023",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		type: "Competition",
		email: "courtney.henry@example.com",
		role: "Designer",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "Nov 12th, 2023",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		type: "Private",
		email: "tom.cook@example.com",
		role: "Director of Product",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "Nov 7th, 2023",
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
