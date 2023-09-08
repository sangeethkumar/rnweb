import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {WebViewSample} from "../ui/WebViewSample";
import Input from "../ui/Input";

const Dashboard1 = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>React Native Web App Example</Text>
            <Input/>
            <WebViewSample/>
        </View>
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

export default Dashboard1;
