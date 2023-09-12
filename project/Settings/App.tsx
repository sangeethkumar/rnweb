import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SettingsScreen from '@rn-web-app/settings/Screens/SettingsScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SettingsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
