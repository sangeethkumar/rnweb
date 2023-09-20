import React, { useContext } from "react";
import ResponsiveStyle from "./ResponsiveStyle";
import { DIMENSION_MODES } from "./ResponsiveConstants";

export const MyResponsiveContext = React.createContext(
  DIMENSION_MODES.IS_MOBILE_MODE
);

export default function useResponsiveStyle(style) {
  const currentViewMode = useContext(MyResponsiveContext);
  return ResponsiveStyle(style, currentViewMode);
}
