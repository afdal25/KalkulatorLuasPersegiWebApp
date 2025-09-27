// App.tsx di proyek Expo

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import Statefull from './Statefull';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* Menggunakan View sebagai pengganti Touchable... di level tertinggi untuk kompatibilitas web */}
        <View style={styles.innerContainer}>
          <Statefull />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});