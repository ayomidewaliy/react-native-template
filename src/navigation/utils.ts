import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';

type RootNavigation = NavigationContainerRef<
  Record<string, object | undefined>
>;

export const navigationRef = createNavigationContainerRef<RootNavigation>();

export const navigateTo = (
  screen: keyof RootNavigation['navigate'],
  params?: Record<string, any>,
) => {
  if (navigationRef.current) {
    // @ts-ignore
    navigationRef.current?.navigate(screen, params);
  }
};

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  fullScreenGestureEnabled: true,
};

export const containerOnStateChange = (routeNameRef: any) => async () => {
  const currentRouteName = navigationRef.current?.getCurrentRoute?.()?.name;

  if (!currentRouteName) {
    return;
  }

  routeNameRef.current = currentRouteName;
};

export const containerOnReady = (routeNameRef: any) => () => {
  routeNameRef.current = navigationRef?.current?.getCurrentRoute?.()?.name;
};
