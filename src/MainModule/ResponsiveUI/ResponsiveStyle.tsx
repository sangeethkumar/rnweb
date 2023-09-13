import {StyleSheet} from "react-native";
import {isWeb} from "../utils/AppHelper";

const ResponsiveStyle = ({
                             defaultStyle,
                             tabletPortraitStyle,
                             tabletLandscapeStyle,
                             webStyle,
                             webLargeScreenStyle,
                             webTabletLandscapeStyle,
                             webTabletPortraitStyle,
                             webSmallScreenStyle,
                         }, viewMode) => {
    let styles = {
        ...defaultStyle,
    };

    if (isWeb) {
        styles = {
            ...styles,
            ...webStyle,
        };

        if (viewMode?.isWebMode) {
            styles = {
                ...styles,
                ...webLargeScreenStyle,
                ...tabletLandscapeStyle,
                ...webTabletLandscapeStyle,
            };
        } else if (viewMode?.isTabletLandscapeMode) {
            styles = {
                ...styles,
                ...tabletLandscapeStyle,
                ...webTabletLandscapeStyle,
            };
        } else if (viewMode?.isTabletPortraitMode) {
            styles = {
                ...styles,
                ...tabletPortraitStyle,
                ...webTabletPortraitStyle,
            };
        } else if (viewMode?.isMobileMode) {
            styles = {
                ...styles,
                ...webSmallScreenStyle,
            };
        }
    } else {
        if (viewMode?.isWebMode) {
            styles = {
                ...styles,
                ...tabletLandscapeStyle,
            };
        } else if (viewMode?.isTabletPortraitMode) {
            styles = {
                ...styles,
                tabletPortraitStyle,
            };
        } else if (viewMode?.isTabletLandscapeMode) {
            styles = {
                ...styles,
                tabletLandscapeStyle,
            };
        }
    }

    return StyleSheet.create(styles);
}

export default ResponsiveStyle;
