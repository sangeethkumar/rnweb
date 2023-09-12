import React from "react";
import { useContext } from "react";
import { MyResponsiveContext } from "./constants";

export default function useResponsiveStyle(styleModel) {
  const mode = useContext(MyResponsiveContext);
  return styleModel.setViewMode(mode);
}
