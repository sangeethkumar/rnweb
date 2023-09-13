import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import OrdersScreen from "../../OrdersModule/Screens/OrdersScreen";
import DashboardScreen from "../Screens/DashboardScreen";
import FeaturesScreen from "../../FeaturesModule/Screens/FeaturesScreen";
import PromotionScreen from "../../PromotionModule/Screens/PromotionScreen";
import SettingsScreen from "../../SettingsModule/Screens/SettingsScreen";
import {useScreenModes} from "../ResponsiveUI/ResponsiveUI";
import {MyResponsiveContext} from '../ResponsiveUI/ResponsiveUIContext';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    const screenModes = useScreenModes();

    return (
        <MyResponsiveContext.Provider value={screenModes}>
            <Stack.Navigator
                initialRouteName="Dashboard"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Dashboard" component={DashboardScreen}/>
                <Stack.Screen name="Orders" component={OrdersScreen}/>
                <Stack.Screen name="Features" component={FeaturesScreen}/>
                <Stack.Screen name="Promotion" component={PromotionScreen}/>
                <Stack.Screen name="Settings" component={SettingsScreen}/>
            </Stack.Navigator>
        </MyResponsiveContext.Provider>
    );
};

export default AppNavigator;
