import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ReadBioData from './src/bioData/read';
import ReadClinicalRecord from './src/clinicRecords/read';

const App = () => {
  const [bio, setBio] = useState(false);
  const [cli, setCli] = useState(false);

  const handleBio = () => {
    setBio(true);
  };

  const handleCli = () => {
    setCli(true);
  };

  if (bio) {
    return <ReadBioData />;
  }

  if (cli) {
    return <ReadClinicalRecord />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tooth fixers</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={handleBio} title="View all patients" color="#FF69B4" />
        <Button onPress={handleCli} title="View all records" color="#FF69B4" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#FF69B4',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default App;
