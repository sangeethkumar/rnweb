import { Dimensions } from "react-native";
import {
  DIMENSION_MODES,
  LARGE_SCREEN_WIDTH,
  SMALL_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
} from "./ResponsiveConstants";
import { isWeb } from "../utils/AppHelper";

// Get the device width and height using Dimensions
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// Check if the device is in landscape mode
export const isLandscapeDevice = deviceWidth >= deviceHeight;

// Determine the device mode based on screen width
export const getDeviceMode = () => {
  return isLandscapeDevice
    ? DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE
    : deviceWidth > TABLET_SCREEN_WIDTH
    ? DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE
    : deviceWidth > SMALL_SCREEN_WIDTH
    ? DIMENSION_MODES.IS_SMALL_SCREEN_MODE
    : DIMENSION_MODES.IS_LARGE_SCREEN_MODE;
};

// Determine the dimension mode of the screen based on window dimensions
export const getDimensionModeOfScreen = (window) => {
  if (window?.width && window?.height) {
    const { width: screenWidth, height: screenHeight } = window;

    switch (true) {
      case screenWidth > LARGE_SCREEN_WIDTH && screenWidth > screenHeight:
        return DIMENSION_MODES.IS_LARGE_SCREEN_MODE;

      case screenWidth >= TABLET_SCREEN_WIDTH &&
        screenWidth <= LARGE_SCREEN_WIDTH &&
        screenWidth > screenHeight:
        return DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE;

      case screenWidth >= SMALL_SCREEN_WIDTH &&
        screenWidth < TABLET_SCREEN_WIDTH &&
        screenWidth < screenHeight:
        return DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE;

      case screenWidth < SMALL_SCREEN_WIDTH && screenWidth < screenHeight:
        return DIMENSION_MODES.IS_SMALL_SCREEN_MODE;

      default:
        return DIMENSION_MODES.IS_LARGE_SCREEN_MODE;
    }
  } else {
    // If window dimensions are not available, assume large screen mode
    return DIMENSION_MODES.IS_LARGE_SCREEN_MODE;
  }
};

export const isLandscapeMode = (context) => {
  if (!isWeb) {
    return isLandscapeDevice;
  } else {
    const isLargeScreenMode = context?.isLargeScreenMode || false;
    const isTabletLandscapeMode = context?.isTabletLandscapeMode || false;
    return isLargeScreenMode || isTabletLandscapeMode;
  }
};
