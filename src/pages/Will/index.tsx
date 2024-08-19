import {TextInput, View, Button, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Tts from 'react-native-tts';

const Will = () => {
  const [ttsText, setTtsText] = useState(''); // State untuk menyimpan teks dari TextInput

  const handleVoice = () => {
    if (ttsText.trim()) {
      Tts.speak(ttsText); // Memulai Text-to-Speech dengan teks yang diinput
    } else {
      alert('Please enter some text!'); // Menampilkan alert jika input kosong
    }
  };
  const stopVoice = () => {
    Tts.stop(); // Menghentikan TTS yang sedang berjalan
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={text => setTtsText(text)} //mengisi text yang diinput ke nilai value
        value={ttsText} //nilai value yang dikirim ke usestate
      />
      <View style={styles.buttonContainer}>
        <Button title="Speech" onPress={handleVoice} />
        {/* menghandle tombol untuk menjalankan fungsi speech */}
        <Button title="Stop" onPress={stopVoice} color="red" />
        {/* Tombol untuk menghentikan TTS */}
      </View>
      <Text style={styles.text}>Text to Speech William</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
function alert(_arg0: string) {
  throw new Error('Function not implemented.');
}
