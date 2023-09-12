import React from "react";
import {Image, StyleSheet, Text, TextInput, View} from "react-native";

const Input = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>Name:</Text>
            <TextInput style={styles.textInput}/>
            <Image source={require('../../../project/RnWebApp/assets/images/search.png')} style={styles.imageStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
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
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginVertical: 20
    }
});

export default Input;
