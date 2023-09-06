import React from "react";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import Input from "./src/Input";
import { WebViewSample } from "./src/WebViewSample";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.content}>
                <Text style={styles.title}>React Native Web App Example</Text>
                <Input />
                <WebViewSample />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 24,
    },
});

export default App;
