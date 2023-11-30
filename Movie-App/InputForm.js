import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export default function InputForm() {
  const [filmName, setFilmName] = useState();
  const [description, setDescription] = useState();

  const handleFilmNameChange = (text) => {
    setFilmName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSubmit = (event) => {
    console.log(filmName)
    console.log(description)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter film name"
        value={filmName}
        onChangeText={handleFilmNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={handleDescriptionChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
});
