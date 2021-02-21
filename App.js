import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './redux'
import Routes from './routes'

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
    // <LoginPage />
    
    // <View style={styles.container}>
    //   <Text>Hi</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
