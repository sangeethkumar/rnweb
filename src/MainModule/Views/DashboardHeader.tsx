import React from "react";
import {Text, View} from "react-native";
import {dashboardHeaderStyle} from "../Styles/dashboardHeaderStyles";

interface DashboardHeaderProps {
    showFilter: boolean; // Define the prop(s) you want to pass
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
                                                             showFilter = false,
                                                         }) => {
    return (
        <View
            style={dashboardHeaderStyle.headerContainer}>
            <Text style={dashboardHeaderStyle.header}>Dashboard</Text>
            {showFilter && (
                <Text style={{fontSize: 18, fontWeight: "400", marginRight: 20}}>
                    Filter
                </Text>
            )}
        </View>
    );
};

export default DashboardHeader;
