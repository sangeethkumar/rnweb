import React, { useContext, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import DashboardHeader from "../Views/DashboardHeader";
import FirebaseAnalytics from "../utils/AnalyicsHelper";
import T2SResponsiveStyle from "../ResponsiveUI/T2SResponsiveStyle";
import useResponsiveStyle from "../ResponsiveUI/UseResponsiveStyle";
import FilterBar from "../../FeaturesModule/Views/FilterBar";
import { isLandscapeMode } from "../ResponsiveUI/helpers";
import { MyResponsiveContext } from "../ResponsiveUI/constants";

interface IDashboardScreen {
    navigation: any;
}

const DashboardScreen: React.FC = ({ navigation }: IDashboardScreen) => {
  const styles = useResponsiveStyle(dashboardStyles);
  const mode = useContext(MyResponsiveContext);
  useEffect(() => {
    return () => {
      FirebaseAnalytics.init();
    };
  }, []);

    const handleOrdersPress = () => {
        navigation.navigate("Orders");
    };

    const handleFeaturesPress = () => {
        navigation.navigate("Features");
    };

    const handlePromotionPress = () => {
        navigation.navigate("Promotion");
    };

    const handleSettingsPress = () => {
        navigation.navigate("Settings");
    };

  return (
    <ScrollView style={styles.container}>
      <DashboardHeader showFilter={!isLandscapeMode(mode)} />
      <View style={styles.centerContainer}>
        {isLandscapeMode(mode) && (
          <View style={{ flex: 0.25, height: "100%" }}>
            <FilterBar />
          </View>
        )}

        <View style={{ flex: 1, marginTop: 100 }}>
          <View style={styles.moduleContainer}>
            <TouchableOpacity onPress={handleOrdersPress} style={styles.module}>
              <Image
                source={require("../../../assets/images/orders.png")}
                style={styles.icon}
              />
              <Text style={styles.moduleName}>Orders Module</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleFeaturesPress}
              style={styles.module}
            >
              <Image
                source={require("../../../assets/images/features.png")}
                style={styles.icon}
              />
              <Text style={styles.moduleName}>Features Module</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.moduleContainer}>
            <TouchableOpacity
              onPress={handlePromotionPress}
              style={styles.module}
            >
              <Image
                source={require("../../../assets/images/promotion.png")}
                style={styles.icon}
              />
              <Text style={styles.moduleName}>Promotion Module</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSettingsPress}
              style={styles.module}
            >
              <Image
                source={require("../../../assets/images/settings.png")}
                style={styles.icon}
              />
              <Text style={styles.moduleName}>Settings Module</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// @ts-ignore
const dashboardStyles = new T2SResponsiveStyle({
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

export default DashboardScreen;
