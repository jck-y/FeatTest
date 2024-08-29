import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Tts from 'react-native-tts';

const App = () => {
  useEffect(() => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('id-ID');
    });
  }, []);

  const speak = () => {
    Tts.speak('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tekan tombol untuk mendengar TTS</Text>
      <Button title="Speak" onPress={speak} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;