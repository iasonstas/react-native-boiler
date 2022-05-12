import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from 'react-native';
// import {ScrollView, StyleSheet, Alert, Image} from 'react-native';

function HomeScreen({navigation}) {
  const onPressIng = () => {
    navigation.navigate('Details');
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      }}>
      <Button title="Go to Details" onPress={onPressIng} />
    </View>
  );
}

export default HomeScreen;
