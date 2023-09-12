import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import OrdersScreen from '@rn-web-app/orders/Screens/OrdersScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <OrdersScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
