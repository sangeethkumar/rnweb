import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import OrdersScreen from "../../OrdersModule/Screens/OrdersScreen";
import DashboardScreen from "../Screens/DashboardScreen";
import FeaturesScreen from "../../FeaturesModule/Screens/FeaturesScreen";
import PromotionScreen from "../../PromotionModule/Screens/PromotionScreen";
import SettingsScreen from "../../SettingsModule/Screens/SettingsScreen";
import SearchScreen from "../../OrdersModule/Screens/SearchScreen";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            <Stack.Screen name="Orders" component={OrdersScreen}/>
            <Stack.Screen name="Features" component={FeaturesScreen}/>
            <Stack.Screen name="Promotion" component={PromotionScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name='Search_Screen_Modal' component={SearchScreen}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;
