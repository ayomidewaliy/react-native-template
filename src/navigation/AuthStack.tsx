import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackParamList} from './types';
import * as screens from '../screens';
import {defaultScreenOptions} from './utils';

const AuthNav = createNativeStackNavigator<AuthStackParamList>();

const PublicStack = () => (
  <AuthNav.Navigator screenOptions={defaultScreenOptions}>
    <AuthNav.Screen name="GetStarted" component={screens.GetStarted} />
  </AuthNav.Navigator>
);

export default PublicStack;
