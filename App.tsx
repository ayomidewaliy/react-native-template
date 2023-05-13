import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import Routes from '@navigation/index';
import {navigationRef} from '@src/navigation/utils';
import {store} from 'store';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

function App() {
  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex1}>
        <NavigationContainer ref={navigationRef} theme={navTheme}>
          <Provider store={store}>
            <Routes />
          </Provider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  flex1: {flex: 1},
});
