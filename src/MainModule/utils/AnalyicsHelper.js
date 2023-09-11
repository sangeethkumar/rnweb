import analytics from "@react-native-firebase/analytics";

class FirebaseAnalytics {
    // Initialize Firebase Analytics
    static init() {
        analytics().setAnalyticsCollectionEnabled(true).then();
    }

    // Log a custom event
    static logEvent(eventName, params = {}) {
        analytics().logEvent(eventName, params).then();
    }

}

export default FirebaseAnalytics;
