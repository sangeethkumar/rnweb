import {Dimensions} from "react-native";
import {DIMENSION_MODES, LARGE_SCREEN_WIDTH, SMALL_SCREEN_WIDTH, TABLET_SCREEN_WIDTH,} from "./ResponsiveConstants";
import {isWeb} from "../utils/AppHelper";

// Get the device width and height using Dimensions
const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window");

// Check if the device is in landscape mode
export const isLandscapeDevice = deviceWidth >= deviceHeight;

// Determine the device mode based on screen width
export const getDeviceMode = () => {
    if (isLandscapeDevice) {
        return DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE;
    }
    if (deviceWidth > TABLET_SCREEN_WIDTH) {
        return DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE;
    }
    if (deviceWidth > SMALL_SCREEN_WIDTH) {
        return DIMENSION_MODES.IS_MOBILE_MODE;
    }
    return DIMENSION_MODES.IS_WEB_MODE;
};

// Determine the dimension mode of the screen based on window dimensions
export const getDimensionModeOfScreen = (window) => {
    if (!window || !window.width || !window.height) {
        // If window dimensions are not available, assume large screen mode
        return DIMENSION_MODES.IS_WEB_MODE;
    }

    const {width: screenWidth, height: screenHeight} = window;

    if (screenWidth > LARGE_SCREEN_WIDTH &&
        screenWidth > screenHeight) {
        return DIMENSION_MODES.IS_WEB_MODE;
    }

    if (screenWidth >= TABLET_SCREEN_WIDTH &&
        screenWidth <= LARGE_SCREEN_WIDTH &&
        screenWidth > screenHeight) {
        return DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE;
    }

    if (screenWidth >= SMALL_SCREEN_WIDTH &&
        screenWidth < TABLET_SCREEN_WIDTH &&
        screenWidth < screenHeight) {
        return DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE;
    }

    if (screenWidth < SMALL_SCREEN_WIDTH && screenWidth < screenHeight) {
        return DIMENSION_MODES.IS_MOBILE_MODE;
    }

    // Default to large screen mode if no conditions are met
    return DIMENSION_MODES.IS_WEB_MODE;
};

export const isLandscapeMode = (context) => {
    if (!isWeb) {
        return isLandscapeDevice;
    }

    const isLargeScreenMode = context?.isWebMode || false;
    const isTabletLandscapeMode = context?.isTabletLandscapeMode || false;

    return isLargeScreenMode || isTabletLandscapeMode;
};
