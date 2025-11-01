import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" />
      <Text style={{ color: '#00FF88', fontSize: 24, fontWeight: 'bold' }}>MAVARA IRIB</Text>
      <Text style={{ color: '#fff', marginTop: 10 }}>Android Ready — Expo Project</Text>
    </View>
  );
}
