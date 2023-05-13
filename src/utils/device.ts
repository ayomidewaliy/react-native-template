import {Dimensions, Platform} from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const screenHeight = Math.round(Dimensions.get('window').height);
export const screenWidth = Math.round(Dimensions.get('window').width);
export const isSmallScreen = screenHeight <= 667;
export const isIphoneX = isIos && !isSmallScreen;
