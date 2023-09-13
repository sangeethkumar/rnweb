import React, { useContext, useEffect } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import DashboardHeader from "../Views/DashboardHeader";
import FirebaseAnalytics from "../utils/AnalyicsHelper";
import useResponsiveStyle from "../ResponsiveUI/ResponsiveUIContext";
import FilterBar from "../../FeaturesModule/Views/FilterBar";
import { isLandscapeMode } from "../ResponsiveUI/ResponsiveHelpers";
import { MyResponsiveContext } from "../ResponsiveUI/ResponsiveUIContext";
import { dashboardStyles } from "../Styles/dashboardStyles";

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
          <View style={styles.filterContainer}>
            <FilterBar />
          </View>
        )}

        <View style={styles.secondaryContainer}>
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

export default DashboardScreen;
