import React from 'react';
import WebView from 'react-native-webview';

export const WebViewSample = () => {
    return (
        <WebView
            startInLoadingState={true}
            useWebKit={true}
            androidLayerType={'software'}
            javaScriptEnabled={true}
            allowUniversalAccessFromFileURLs={true}
            allowFileAccess={true}
            thirdPartyCookiesEnabled={true}
            source={{uri: 'https://foodhub.co.uk/'}}/>
    );
}

