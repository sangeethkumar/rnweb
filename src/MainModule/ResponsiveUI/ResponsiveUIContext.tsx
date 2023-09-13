import React, {useContext} from "react";

export const INITIAL_MODES = {
    isLargeScreenMode: false,
    isTabletLandscapeMode: false,
    isTabletPortraitMode: false,
    isSmallScreenMode: false,
};
export const MyResponsiveContext = React.createContext(INITIAL_MODES);

export default function useResponsiveStyle(styleModel) {
    const mode = useContext(MyResponsiveContext);
    return styleModel.setViewMode(mode);
}
