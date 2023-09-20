import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./src/MainModule/Navigations/AppNavigator";

export function isValidElement(data) {
    return data !== null && data !== undefined;
}

export const isArrayNonEmpty = (newOrderResponse) => {
    return isValidElement(newOrderResponse?.length) && newOrderResponse.length > 0;
};

export const replaceWindowRoute = (state = null, title = null, route = '/') => {
    console.log('strings ', route);
    window?.history?.replaceState(state, title, route);
};


const onNavigationStateChange = (newState) => {
    console.log('newState ', newState);
    let routes = newState?.routes || [];
    console.log('routes ', routes);
    if (isArrayNonEmpty(routes)) {
        console.log('if inside ', routes);
        let index = routes?.length - 1;
        console.log('index ', routes);
        const currentRoute = routes[index];
        console.log('currentRoute ', currentRoute);
        const prevRoute = routes[routes?.length - 2];
        console.log('prevRoute ', prevRoute);
        // replace modal
        if (currentRoute.name.includes('yyy')) {
            console.log('currentRoute modal ', currentRoute.name);
            routes = routes.slice();
            console.log('routes after ', routes);
            while (index >= 0) {
                console.log('while inside ', currentRoute.name, index);
                if (routes[index].name.includes('Modal')) {
                    console.log('before routes.pop() ', routes);
                    routes.pop();
                    console.log('after routes.pop() ', routes);
                    index--;
                }  else {
                    console.log('after index ', routes[index]);
                    let previousRoutePath = routes[index].name;
                    replaceWindowRoute(null, null, previousRoutePath === 'Orders' ? '/Orders' : previousRoutePath);
                    break;
                }
            }
        }
    }
};

const config = {
    screens: {
    'Dashboard': 'Dashboard',
    'Orders': 'Orders',
    'Features': 'Features',
    'Promotion': 'Promotion',
    'Settings': 'Settings',
    'Search_Screen_Modal': 'Dashboard/Orders/SearchModal'
    },
};

const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config,
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
                <NavigationContainer linking={linking} onStateChange={onNavigationStateChange}>
                    <AppNavigator/>
                </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default App;
