import {Dimensions} from "react-native";
import {useEffect, useMemo, useState} from "react";
import {isWeb} from "../utils/AppHelper";
import {getDeviceMode, getDimensionModeOfScreen} from "./ResponsiveHelpers";
import {DIMENSION_MODES} from "./ResponsiveConstants";

const deviceWindow = Dimensions.get("window");
const initialMode = getDimensionModeOfScreen(deviceWindow);

export function useScreenModes() {
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

    return useMemo(() => {
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
}
