import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonHeader from "../../MainModule/Views/CommonHeader";

interface IMenuScreen {
    navigation: any;
}

const MenuScreen: React.FC = ({navigation}: IMenuScreen) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Menu" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.textStyle}>Menu</Text>
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
