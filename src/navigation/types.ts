import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  GetStarted: undefined;
  Signup: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  VerifyEmail: undefined;
};

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

export type Screens = RootStackParamList & AuthStackParamList;
