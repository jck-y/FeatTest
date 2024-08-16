import {View, Button, StyleSheet, Text} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Jacky" onPress={() => navigation.navigate('Jacky')} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Will" onPress={() => navigation.navigate('Will')} />
      </View>
      <Text style={styles.text}>Text to Speech Feature</Text>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C9E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  buttonWrapper: {
    marginBottom: 10,
  },
});
