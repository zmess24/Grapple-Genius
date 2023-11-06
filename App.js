import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen/Index";
import CalendarScreen from "./src/screens/CalendarScreen";
import AnalysisScreen from "./src/screens/AnalysisScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import JournalScreen from "./src/screens/JournalScreen";
import JournalDrawer from "./src/screens/JournalDrawer";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";
import { BottomDrawerMethods } from "react-native-animated-bottom-drawer";
const Tab = createBottomTabNavigator();

// Keep the splash screen visible while fetching resources from AsyncStorage
// SplashScreen.preventAutoHideAsync();

export default function App() {
	const bottomDrawerRef = useRef(BottomDrawerMethods);

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

	const handlePress = () => ({
		tabPress: (e) => {
			e.preventDefault();
			bottomDrawerRef.current.open();
		},
	});

	const loadOptions = ({ tabBarLabel, iconName, custom = false }) => {
		return {
			tabBarLabel,
			headerShown: false,
			tabBarActiveTintColor: "black",
			tabBarInactiveTintColor: "lightgrey",

			tabBarIcon: ({ focused }) => {
				return custom ? (
					<View
						style={{
							position: "absolute",
							bottom: 0,
							height: 40,
							width: 40,
							borderRadius: 40,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<AntDesign name={iconName} size={40} color={focused ? "black" : "silver"} />
					</View>
				) : (
					<AntDesign name={iconName} size={21} color={focused ? "black" : "silver"} />
				);
			},
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
				<Tab.Screen name="Journal" options={loadOptions({ tabBarLabel: "", iconName: "pluscircle", custom: true })} listeners={handlePress}>
					{(props) => <JournalScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen name="Stats" options={loadOptions({ tabBarLabel: "Calendar", iconName: "calendar" })}>
					{(props) => <CalendarScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen name="Settings" options={loadOptions({ tabBarLabel: "Settings", iconName: "setting" })}>
					{(props) => <SettingsScreen {...props} />}
				</Tab.Screen>
			</Tab.Navigator>
			<JournalDrawer bottomDrawerRef={bottomDrawerRef} />
		</NavigationContainer>
	);
}
