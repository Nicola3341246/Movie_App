import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InputButoon from './components/Button.js'

export default function App() {
  const [showInput, setShowInput] = useState(false);

  const handleButtonPress = () => {
    setShowInput(!showInput);
  };

  return (
    <InputButoon>
    
    </InputButoon>
    // <View style={styles.container}>
    //   {showInput ? (
    //     <Text>Input is shown</Text>
    //   ) : (
    //     <Text>No input field shown</Text>
    //   )}
    //   <Button
    //     title={showInput ? 'Hide Input' : 'Show Input'}
    //     onPress={handleButtonPress}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

