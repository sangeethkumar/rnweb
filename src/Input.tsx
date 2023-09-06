import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const Input = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>Name:</Text>
            <TextInput style={styles.textInput}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        paddingHorizontal: 15
    },
    textInput: {
        borderBottomColor: "blue",
        width: "90%",
        height: 40,
        borderBottomWidth: 1
    },
    textStyle: {
        fontSize: 22,
        fontFamily: "DancingScript-Bold"
    }
});

export default Input;
