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
      flexDirection: "row",
    },
    filterContainer: {
      flex: 0.25,
      height: "100%",
    },
    secondaryContainer: {
      flex: 1,
      marginTop: 100,
    },

    moduleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 100,
    },
    module: {
      flex: 1,
      alignItems: "center",
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
  webSmallScreenStyle: {
    moduleContainer: {},
    centerContainer: {
      flex: 1,
      marginTop: 30,
    },
    module: {
      flex: 1,
      alignItems: "center",
      marginBottom: 50,
    },
  },
});
