import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonHeader from "../../MainModule/Views/CommonHeader";

interface ISettingsScreen {
    navigation: any;
}

const SettingsScreen: React.FC = ({navigation}: ISettingsScreen) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Settings" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.textStyle}>Settings</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 22,
    },
});

export default SettingsScreen;
