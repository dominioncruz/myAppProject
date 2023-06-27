import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CreateBioData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateOfRegistration: '',
    matriculationNumber: '21120612475', // Default value
  });

  const handleChange = (name:any, value:any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/biodata-of-patients', formData);
      console.log(formData); // Handle the response from the backend
      setFormData({
        firstName: '',
        surName: '',
        middleName: '',
        dateOfBirth: '',
        homeAddress: '',
        dateOfRegistration: '',
        matriculationNumber: '21120612475',
      });
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    labelText: {
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: 'pink',
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    button: {
      backgroundColor: 'pink',
      marginBottom: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>First name:</Text>
        <TextInput
          placeholder="First name"
          value={formData.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Surname:</Text>
        <TextInput
          placeholder="Surname"
          value={formData.surName}
          onChangeText={(text) => handleChange('surName', text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Middle name:</Text>
        <TextInput
          placeholder="Middle name"
          value={formData.middleName}
          onChangeText={(text) => handleChange('middleName', text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Date of birth:</Text>
        <TextInput
          placeholder="yyyy/mm/dd"
          value={formData.dateOfBirth}
          onChangeText={(text) => handleChange('dateOfBirth', text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Home address:</Text>
        <TextInput
          placeholder="Home address"
          value={formData.homeAddress}
          onChangeText={(text) => handleChange('homeAddress', text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Date of registration:</Text>
        <TextInput
          placeholder="yyyy/mm/dd"
          value={formData.dateOfRegistration}
          onChangeText={(text) => handleChange('dateOfRegistration', text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Matriculation number:</Text>
        <TextInput
          value={formData.matriculationNumber}
          onChangeText={(text) => handleChange('matriculationNumber', text)}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <Button title="Submit" onPress={handleFormSubmit} color="pink" />
    </View>
  );
};

export default CreateBioData;
