import React from 'react';
import WebView from 'react-native-webview';
import {isFH} from "../utils/AppHelper";

export const WebViewSample = () => {
    let loadURL = isFH ?' https://foodhub.co.uk/' : 'https://myt-sit.fhcdn.dev/';
    return (
        <WebView
            startInLoadingState={true}
            useWebKit={true}
            androidLayerType={'software'}
            javaScriptEnabled={true}
            allowUniversalAccessFromFileURLs={true}
            allowFileAccess={true}
            thirdPartyCookiesEnabled={true}
            source={{uri: loadURL}}/>
    );
}

