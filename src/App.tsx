import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from '@/navigation/RootNavigator';
import {StatusBar} from 'react-native';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
