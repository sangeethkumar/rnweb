import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DashboardHeader from "../Views/DashboardHeader";
import FirebaseAnalytics from "../utils/AnalyicsHelper";

interface IDashboardScreen {
    navigation: any;
}

const DashboardScreen: React.FC = ({navigation}: IDashboardScreen) => {
    useEffect(() => {
        return () => {
            FirebaseAnalytics.init();
        };
    }, []);

    const handleOrdersPress = () => {
        navigation.navigate('Orders');
    };

    const handleFeaturesPress = () => {
        navigation.navigate('Features');
    };

    const handlePromotionPress = () => {
        navigation.navigate('Promotion');
    };

    const handleSettingsPress = () => {
        navigation.navigate('Settings');
    };

    return (
        <View style={styles.container}>
            <DashboardHeader/>
            <View style={styles.centerContainer}>
                <View style={styles.moduleContainer}>
                    <TouchableOpacity onPress={handleOrdersPress} style={styles.module}>
                        <Image source={require('../../../assets/images/orders.png')} style={styles.icon}/>
                        <Text style={styles.moduleName}>Orders Module</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleFeaturesPress} style={styles.module}>
                        <Image source={require('../../../assets/images/features.png')} style={styles.icon}/>
                        <Text style={styles.moduleName}>Features Module</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moduleContainer}>
                    <TouchableOpacity onPress={handlePromotionPress} style={styles.module}>
                        <Image source={require('../../../assets/images/promotion.png')} style={styles.icon}/>
                        <Text style={styles.moduleName}>Promotion Module</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSettingsPress} style={styles.module}>
                        <Image source={require('../../../assets/images/settings.png')} style={styles.icon}/>
                        <Text style={styles.moduleName}>Settings Module</Text>
                    </TouchableOpacity>
                </View>
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
    centerContainer: {
        flex: 1,
        marginTop: 100
    },
    moduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 100,
    },
    module: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 150,
        height: 150,
        marginBottom: 8,
    },
    moduleName: {
        fontSize: 16,
    },
});

export default DashboardScreen;
