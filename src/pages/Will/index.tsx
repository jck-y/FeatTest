import {TextInput, View, Button, StyleSheet, Text} from 'react-native';
import React, {useState, useRef} from 'react';
// import Tts from 'react-native-tts';
import axios from 'axios';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import Config from 'react-native-config';

const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Config.OPENAI_API}`,
  },
});

const Will = () => {
  const [ttsText, setTtsText] = useState('');
  const soundRef = useRef(null); // Use ref to keep track of sound instance

  const handlePress = async () => {
    try {
      // Fetch audio from OpenAI API
      const response = await openAI.post('/audio/speech', {
        model: 'tts-1',
        input: ttsText,
        voice: 'onyx',
        language: 'id',
      });
      console.log(response.data);
      // Save audio to local file
      const audioPath = `${RNFS.DocumentDirectoryPath}/tts-audio.mp3`;
      await RNFS.writeFile(audioPath, response.data, 'base64'); // Save as Base64
      console.log(audioPath);

      // Load and play the audio
      const newSound = new Sound(audioPath, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.error('Failed to load sound:', error);
          return;
        }
        console.log('Sound loaded successfully!');
        newSound.play(success => {
          if (success) {
            console.log('Audio played successfully!');
          } else {
            console.error('Audio playback failed.');
          }
        });
      });

      // Store the sound instance in ref
      soundRef.current = newSound;
    } catch (error) {
      console.error('Error generating speech:', error);
    }
  };

  const stopVoice = () => {
    if (soundRef.current) {
      soundRef.current.stop(() => {
        console.log('Audio stopped!');
      });
    } else {
      console.log('No audio to stop.');
    }
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
        <Button title="Speech" onPress={handlePress} />
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
    color: 'black',
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
