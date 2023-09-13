import { StyleSheet } from "react-native";
import { isWeb } from "../utils/AppHelper";

/**
 *
 * @param defaultStyle
 defaultStyle is common for all platforms, if the style is same for mobile app and web app and same for all dimensions of web we can put the style in mobile style.

 * @param tabletPortraitStyle
 tabletPortraitStyle is for portrait mode in tablet view, this will override mobile style and if style is common for mobile app tablet and web app app portrait
 we can put in tabletPortraitStyle.

 * @param tabletLandscapeStyle
 tabletLandscapeStyle is for landscape mode, this will override defaultStyle, if we have common style same for mobile app landscape, web app landscape and web app
 largeScreen we can put the style in tabletLandscapeStyle.

 * @param webStyle
 webStyle is for if we want style only for web not for mobile app this will basically override defaultStyle, and style is common for all web dimension modes than we
 can place our style in webStyle.

 * @param webLargeScreenStyle
 webLargeScreenStyle is for web app when we want specific style only for web largeScreen dimension than we can place it here, this will usually override defaultStyle and
 webStyle.

 * @param webTabletLandscapeStyle
 webTabletLandscapeStyle is for web app when we want any specific style only in web landscape mode than we can place it here, this will usually override defaultStyle,
 webStyle and tabletLandscapeStyle.

 * @param webTabletPortraitStyle
 webTabletPortraitStyle is for web app when we want any specific style only for web in tablet portrait mode than we can place it here, this will usually override
 defaultStyle, webStyle and tabletPortraitStyle.

 * @param webSmallScreenStyle
 webSmallScreenStyle is for web app when we want any specific style only for web in small screen mode than we can place it here, this will usually override defaultStyle,
 webStyle.

 */

function ResponsiveStyle({
  defaultStyle,
  tabletPortraitStyle,
  tabletLandscapeStyle,
  webStyle,
  webLargeScreenStyle,
  webTabletLandscapeStyle,
  webTabletPortraitStyle,
  webSmallScreenStyle,
}) {
  const responsiveStyle = (viewMode) => {
    let styles;

    if (isWeb) {
      styles = {
        ...defaultStyle,
        ...webStyle,
        ...(viewMode?.isLargeScreenMode && webLargeScreenStyle),
        ...(viewMode?.isTabletLandscapeMode && tabletLandscapeStyle),
        ...(viewMode?.isTabletPortraitMode && webTabletPortraitStyle),
        ...(viewMode?.isSmallScreenMode && webSmallScreenStyle),
      };
    } else {
      styles = {
        ...defaultStyle,
        ...(viewMode?.isLargeScreenMode && tabletLandscapeStyle),
        ...(viewMode?.isTabletPortraitMode && tabletPortraitStyle),
        ...(viewMode?.isTabletLandscapeMode && tabletLandscapeStyle),
      };
    }

    return StyleSheet.create(styles);
  };

  responsiveStyle.setViewMode = (viewMode) => {
    return responsiveStyle(viewMode);
  };

  return responsiveStyle;
}

export default ResponsiveStyle;
