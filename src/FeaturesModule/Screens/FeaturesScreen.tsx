import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonHeader from "../../MainModule/Views/CommonHeader";

interface IFeaturesScreen {
    navigation: any;
}

const FeaturesScreen: React.FC = ({navigation}: IFeaturesScreen) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Features" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.textStyle}>Features Content</Text>
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

export default FeaturesScreen;
