import React, {useContext} from "react";
import ResponsiveStyle from "./ResponsiveStyle";

export const INITIAL_MODES = {
    isLargeScreenMode: false,
    isTabletLandscapeMode: false,
    isTabletPortraitMode: false,
    isSmallScreenMode: false,
};
export const MyResponsiveContext = React.createContext(INITIAL_MODES);

export default function useResponsiveStyle(style) {
    const mode = useContext(MyResponsiveContext);
    return ResponsiveStyle(style, mode);
}
