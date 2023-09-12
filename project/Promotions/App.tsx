import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import PromotionScreen from '@rn-web-app/promotions/Screens/PromotionScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <PromotionScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
