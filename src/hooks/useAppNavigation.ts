import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {RootStackParamList, AuthStackParamList} from '../navigation/types';

type OtherScreens = RootStackParamList & AuthStackParamList;

type ScreenNavigationProp = NativeStackNavigationProp<OtherScreens>;

export const useAppNavigation = () => useNavigation<ScreenNavigationProp>();
