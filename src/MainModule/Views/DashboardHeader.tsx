import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DashboardHeader: React.FC = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Dashboard</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
    },
});

export default DashboardHeader;
