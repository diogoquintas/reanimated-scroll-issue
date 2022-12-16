import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ScrollComponent from './ScrollComponent';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: '100%', height: '50%'}}>
        <ScrollComponent />
      </View>
      <View style={{width: '100%', height: '50%'}}>
        <ScrollComponent isWrapped />
      </View>
    </SafeAreaView>
  );
};

export default App;
