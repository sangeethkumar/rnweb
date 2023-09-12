import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CommonHeaderProps {
    title: string;
    navigation: any; // You can replace 'any' with a more specific type if needed
}

const CommonHeader: React.FC<CommonHeaderProps> = ({title, navigation}) => {
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <Image source={require('../../../project/RnWebApp/assets/images/back.png')} style={styles.backIcon}/>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 16,
    },
    backButton: {
        padding: 8,
        flexDirection: 'row'
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center'
    },
});

export default CommonHeader;
