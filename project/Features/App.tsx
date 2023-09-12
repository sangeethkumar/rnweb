import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import FeaturesScreen from '@rn-web-app/features/Screens/FeaturesScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FeaturesScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
