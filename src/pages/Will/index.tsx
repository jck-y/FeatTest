import {TextInput, View, Button, StyleSheet, Text} from 'react-native';
import React from 'react';

const Will = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type something..." />
      <Button title="Speech" onPress={() => {}} />
      <Text style={styles.text}>Text to Speech Jacky</Text>
    </View>
  );
};

export default Will;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});
