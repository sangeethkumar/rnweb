import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const withModelForTablet = (Component, onlyWeb = true) => {
    return (props) => {
        const { navigation } = props;
        useEffect(() => {
            navigation.setOptions({
                presentation: 'transparentModal'
            });
        }, [navigation]);
        if (onlyWeb) {
            return (
                <View style={style.container}>
                    <View style={style.modal}>
                        <View style={style.body}>
                            <Component {...props} />
                        </View>
                    </View>
                    <TouchableOpacity style={style.backDrop} onPress={() => props.navigation.goBack()} />
                </View>
            );
        }
        return (
            <View style={style.nonModalContainer}>
                <Component {...props} />
            </View>
        );
    };
};

const { width, height } = Dimensions.get('window');

const mobileStyle = {
    nonModalContainer: {
        flex: 1
        //  backgroundColor: Colors.white //will affect places where modal needs transparent background
    },
    container: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: width * 0.5,
        height: height * 0.75,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        zIndex: 1,
        overflow: 'hidden'
    },
    header: {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        fontSize: 14,
        padding: 5,
        paddingVertical: 10,
        marginLeft: 10
    },
    body: {
        flex: 1
    },
    backDrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
};


const style = StyleSheet.create(mobileStyle);

export default withModelForTablet;
