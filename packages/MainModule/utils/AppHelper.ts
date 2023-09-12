import Config from 'react-native-config';
import { Platform } from 'react-native';


export const isAndroid : boolean = Platform.OS === 'android';
export const isIos: boolean = Platform.OS === 'ios';
export const isWeb: boolean = Platform.OS === 'web';

export const isMYT: boolean = Config.APP_TYPE === 'MYT';
export const isMS: boolean = Config.APP_TYPE === 'MS';
export const isFH: boolean = Config.APP_TYPE === 'FH' ;
