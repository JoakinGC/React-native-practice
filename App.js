import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Main from './src/components/Main'; 
import { NativeRouter } from "react-router-native";

export default function App() {
  console.log("HOLA");
  return (<>
    <StatusBar style='light'/>
    <NativeRouter>
      <Main />
    </NativeRouter>
    </>
  );
}
