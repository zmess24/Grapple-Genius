import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen/Index";
import CalendarScreen from "./src/screens/CalendarScreen";
import AnalysisScreen from "./src/screens/AnalysisScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import JournalScreen from "./src/screens/JournalScreen";
import { AntDesign } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
const Tab = createBottomTabNavigator();

// Keep the splash screen visible while fetching resources from AsyncStorage
// SplashScreen.preventAutoHideAsync();

export default function App() {
	// const { user, setUser, weight, setWeight, date, setDate, week, setWeek, appIsReady } = useLoadUserData();

	// useEffect(() => {
	// 	const checkDataLoaded = () => {
	// 		if (appIsReady) {
	// 			setTimeout(async () => {
	// 				await SplashScreen.hideAsync();
	// 			}, 500);
	// 		}
	// 	};

	// 	checkDataLoaded();
	// }, [appIsReady]);

	const loadOptions = ({ tabBarLabel, iconName }) => {
		return {
			tabBarLabel,
			headerShown: false,
			tabBarActiveTintColor: "black",
			tabBarInactiveTintColor: "lightgrey",
			tabBarIcon: ({ focused }) => <AntDesign name={iconName} size={21} color={focused ? "black" : "silver"} />,
		};
	};
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ tabBarShowLabel: true }}>
				<Tab.Screen name="Home" options={loadOptions({ tabBarLabel: "Home", iconName: "home" })}>
					{(props) => <HomeScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen name="Analysis" options={loadOptions({ tabBarLabel: "Analysis", iconName: "areachart" })}>
					{(props) => <AnalysisScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen name="Journal" options={loadOptions({ tabBarLabel: "", iconName: "pluscircle" })}>
					{(props) => <JournalScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen name="Stats" options={loadOptions({ tabBarLabel: "Calendar", iconName: "calendar" })}>
					{(props) => <CalendarScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen name="Settings" options={loadOptions({ tabBarLabel: "Settings", iconName: "setting" })}>
					{(props) => <SettingsScreen {...props} />}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
