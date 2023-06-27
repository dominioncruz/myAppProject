import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const CreateClinicRecord = () => {
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUndertaken: '',
    dateOfNextAppointment: '',
  });

  const handleChange = (name:any, value:any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/clinical-records', formData);
      console.log(formData); // Handle the response from the backend
      setFormData({
        clinicDate: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        dateOfNextAppointment: '',
      });
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Clinic date:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="yyyy/mm/dd"
        onChangeText={(text) => handleChange('clinicDate', text)}
      />

      <Text style={styles.labelText}>Nature of ailment:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nature of ailment"
        value={formData.natureOfAilment}
        onChangeText={(text) => handleChange('natureOfAilment', text)}
      />

      <Text style={styles.labelText}>Medicine prescribed:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Medicine prescribed"
        value={formData.medicinePrescribed}
        onChangeText={(text) => handleChange('medicinePrescribed', text)}
      />

      <Text style={styles.labelText}>Procedure undertaken:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Procedure undertaken"
        value={formData.procedureUndertaken}
        onChangeText={(text) => handleChange('procedureUndertaken', text)}
      />

      <Text style={styles.labelText}>Date of next prescribed:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Date of next prescribed"
        value={formData.dateOfNextAppointment}
        onChangeText={(text) => handleChange('dateOfNextAppointment', text)}
      />

      <Button title="Submit" onPress={handleFormSubmit} color="pink" />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    labelText: {
      marginBottom: 4,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'pink',
    },
  });
export default CreateClinicRecord;
