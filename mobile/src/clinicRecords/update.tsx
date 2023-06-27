import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
//import './form.css';
type Props = {
  id: any
}
const UpdateClinicalRecord: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUndertaken: '',
    dateOfNextAppointment: ''
  });

  useEffect(() => {
    fetchRecord();
  }, [props.id]);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/clinical-records/${props.id}`);
      setFormData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (name:any, value:any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.patch(`http://localhost:3000/clinical-records/${props.id}`, formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
            <Text>Clinic date:
                <TextInput
                    placeholder="yyyy/mm/dd"
                    value={formData.clinicDate}
                    onChangeText={text => handleChange('clinicDate', text)}
                />
            </Text>
            <Text>Nature of ailment:
                <TextInput
                    placeholder="Nature of ailment"
                    value={formData.natureOfAilment}
                    onChangeText={text => handleChange('natureOfAilment', text)}
                />
            </Text>

            <Text>Medicine prescribed:
                <TextInput
                    placeholder="Medicine prescribed"
                    value={formData.medicinePrescribed}
                    onChangeText={text => handleChange('medicinePrescribed', text)}
                />
            </Text>

            <Text>Procedure undertaken:
                <TextInput
                    placeholder="Procedure undertaken"
                    value={formData.procedureUndertaken}
                    onChangeText={text => handleChange('procedureUndertaken', text)}
                />
            </Text>

            <Text>Date of next prescribed:
                <TextInput
                    placeholder="Date of next prescribed"
                    value={formData.dateOfNextAppointment}
                    onChangeText={text => handleChange('dateOfNextAppointment', text)}
                />
            </Text>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default UpdateClinicalRecord;
