import React, { useEffect, useState, useMemo } from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../../OrdersModule/Screens/OrdersScreen";
import DashboardScreen from "../Screens/DashboardScreen";
import FeaturesScreen from "../../FeaturesModule/Screens/FeaturesScreen";
import PromotionScreen from "../../PromotionModule/Screens/PromotionScreen";
import SettingsScreen from "../../SettingsModule/Screens/SettingsScreen";
import {
  DIMENSION_MODES,
  MyResponsiveContext,
} from "../ResponsiveUI/constants";
import { isWeb } from "../utils/AppHelper";
import {
  getDeviceMode,
  getDimensionModeOfScreen,
} from "../ResponsiveUI/helpers";
const deviceWindow = Dimensions.get("window");
const initialMode = getDimensionModeOfScreen(deviceWindow);
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const [currentMode, setCurrentMode] = useState(initialMode);
  useEffect(() => {
    let deviceEventListner = null;
    if (isWeb) {
      deviceEventListner = Dimensions.addEventListener(
        "change",
        handleOrientationChange
      );
    }
    return () => {
      if (deviceEventListner && isWeb) {
        deviceEventListner?.remove();
      }
    };
  }, []);
  const handleOrientationChange = (data) => {
    if (data?.window) {
      const mode = getDimensionModeOfScreen(data.window);
      console.log("mode:", mode);
      if (mode) {
        setCurrentMode(mode);
      }
    }
  };
  const screenModes = useMemo(() => {
    let deviceMode = isWeb ? currentMode : getDeviceMode();
    return {
      isLargeScreenMode: deviceMode === DIMENSION_MODES.IS_LARGE_SCREEN_MODE,
      isTabletLandscapeMode:
        deviceMode === DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE,
      isTabletPortraitMode:
        deviceMode === DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE,
      isSmallScreenMode: deviceMode === DIMENSION_MODES.IS_SMALL_SCREEN_MODE,
    };
  }, [currentMode]);
  return (
    <MyResponsiveContext.Provider value={screenModes}>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Features" component={FeaturesScreen} />
        <Stack.Screen name="Promotion" component={PromotionScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </MyResponsiveContext.Provider>
  );
};

export default AppNavigator;
