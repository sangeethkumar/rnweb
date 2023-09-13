import ResponsiveStyle from "../ResponsiveUI/ResponsiveStyle";
// @ts-ignore
export const dashboardStyles = new ResponsiveStyle({
  defaultStyle: {
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#fff",
    },

    centerContainer: {
      flex: 1,
      marginTop: 30,
    },
    filterContainer: {
      flex: 0.25,
      height: "100%",
    },
    secondaryContainer: {
      flex: 1,
      marginTop: 50,
    },

    module: {
      flex: 1,
      alignItems: "center",
      marginBottom: 50,
    },
    icon: {
      width: 150,
      height: 150,
      marginBottom: 8,
    },
    moduleName: {
      fontSize: 16,
    },
  },
  tabletLandscapeStyle: {
    moduleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 100,
    },
    centerContainer: {
      flex: 1,
      flexDirection: "row",
    },
    module: {
      flex: 1,
      alignItems: "center",
    },
  },
});
