import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CommonHeader from "../../MainModule/Views/CommonHeader";
import FirebaseAnalytics from "../../MainModule/utils/AnalyicsHelper";

interface IOrderScreen {
    navigation: any;
}

const OrderScreen: React.FC = ({navigation}: IOrderScreen) => {

    useEffect(() => {
        FirebaseAnalytics.logEvent('Orders', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
        });
    }, []);

    return (
        <View style={styles.container}>
            <CommonHeader title="Orders" navigation={navigation}/>
            <TouchableOpacity onPress={() => navigation.navigate('Search_Screen_Modal')} style={styles.content}>
                <Text style={styles.textStyle}>Orders Content</Text>
            </TouchableOpacity>
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

export default OrderScreen;
