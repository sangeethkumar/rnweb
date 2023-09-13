import {
  DIMENSION_MODES,
  LARGE_SCREEN_WIDTH,
  SMALL_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
} from "./constants";
import { Dimensions } from "react-native";
import { isWeb } from "../utils/AppHelper";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
export const isLandscapeDevice = deviceWidth >= deviceHeight;
export const getDeviceMode = () => {
  return isLandscapeDevice
    ? isLandscapeDevice
      ? DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE
      : DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE
    : DIMENSION_MODES.IS_SMALL_SCREEN_MODE;
};
export const getDimensionModeOfScreen = (window) => {
  if (window?.width && window?.height) {
    const { width: screenWidth, height: screenHeight } = window;
    if (screenWidth > LARGE_SCREEN_WIDTH && screenWidth > screenHeight) {
      return DIMENSION_MODES.IS_LARGE_SCREEN_MODE;
    } else if (
      screenWidth >= TABLET_SCREEN_WIDTH &&
      screenWidth <= LARGE_SCREEN_WIDTH &&
      screenWidth > screenHeight
    ) {
      return DIMENSION_MODES.IS_TABLET_LANDSCAPE_MODE;
    } else if (
      screenWidth >= SMALL_SCREEN_WIDTH &&
      screenWidth < TABLET_SCREEN_WIDTH &&
      screenWidth < screenHeight
    ) {
      return DIMENSION_MODES.IS_TABLET_PORTRAIT_MODE;
    } else if (screenWidth < SMALL_SCREEN_WIDTH && screenWidth < screenHeight) {
      return DIMENSION_MODES.IS_SMALL_SCREEN_MODE;
    }
  } else {
    return DIMENSION_MODES.IS_LARGE_SCREEN_MODE;
  }
};
