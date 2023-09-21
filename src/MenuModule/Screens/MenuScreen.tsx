import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonHeader from "../../MainModule/Views/CommonHeader";
import ReactApp from '../../../ReactFile' // we cannot directly import microfrontend on typescript so use separate js file for it.

interface IMenuScreen {
    navigation: any;
}

const MenuScreen: React.FC = ({navigation}: IMenuScreen) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Menu" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.textStyle}>Menu</Text>
                <ReactApp/>
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

export default MenuScreen;
