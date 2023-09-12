import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "../../packages/MainModule/Navigations/AppNavigator";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <NavigationContainer>
                <AppNavigator/>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default App;
