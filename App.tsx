import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import Input from "ui/Input";
import {dateDifferenceInDays} from "src/utils/DateUtils/DateHelpers";
import {WebViewSample} from "src/Components/Views/WebViewSample";

const App = () => {
    const dateA = new Date('2023-09-06');
    const dateB = new Date('2023-09-10');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.content}>
                <Text style={styles.title}>React Native Web App Example</Text>
                <Input/>
                <WebViewSample />
                <Text>Current Date is : {dateDifferenceInDays(dateA, dateB)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 24,
    },
});

export default App;
