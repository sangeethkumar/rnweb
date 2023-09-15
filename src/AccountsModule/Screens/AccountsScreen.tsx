import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonHeader from "../../MainModule/Views/CommonHeader";

interface IAccountsScreen {
    navigation: any;
}

const AccountsScreen: React.FC = ({navigation}: IAccountsScreen) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Accounts" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.textStyle}>Accounts</Text>
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

export default AccountsScreen;
