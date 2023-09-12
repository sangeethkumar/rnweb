import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonHeader from "@rn-web-app/main/Views/CommonHeader";

interface IPromotionScreen {
    navigation: any;
}

const PromotionScreen: React.FC = ({navigation}: IPromotionScreen) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Promotion" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.textStyle}>Promotion</Text>
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

export default PromotionScreen;
