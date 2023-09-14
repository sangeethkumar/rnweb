import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface DashboardHeaderProps {
    showFilter: boolean; // Define the prop(s) you want to pass
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
                                                             showFilter = false,
                                                         }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Dashboard</Text>
            {showFilter && (
                <Text style={{fontSize: 18, fontWeight: "400", marginRight: 20}}>
                    Filter
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#fff",
        borderRadius: 1,
        shadowColor: "#000",
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
        fontWeight: "bold",
        padding: 16,
    },
});

export default DashboardHeader;
