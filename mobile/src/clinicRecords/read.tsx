import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import UpdateClinicalRecord from './update';
import CreateClinicalRecord from './create';

const ReadClinicalRecord = () => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showRead, setShowRead] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clinical-records');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id:any) => {
    try {
      await axios.delete(`http://localhost:3000/clinical-records/${id}`);
      fetchData(); // Refetch the data after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id:any) => {
    setSelectedId(id);
    setShowUpdateForm(true);
    setShowCreateForm(false);
    setShowRead(false);
  };

  const handleShowCreateForm = () => {
    setSelectedId(null);
    setShowUpdateForm(false);
    setShowCreateForm(true);
    setShowRead(false);
  };

  const handleClose = () => {
    setShowCreateForm(true);
  };

  if (showCreateForm) {
    return <CreateClinicalRecord />;
  }

  if (showUpdateForm) {
    return <UpdateClinicalRecord id={selectedId} />;
  }

  

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Button onPress={handleShowCreateForm} title="Create" color="pink" />
          <Button onPress={handleClose} title="Back" color="pink" />
          <FlatList
            data={data}
            keyExtractor={(item:any) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.idText}>ID: {item.id}</Text>
                <Text style={styles.labelText}>Clinic Date: {item.clinicDate}</Text>
                <Text style={styles.labelText}>Nature of Ailment: {item.natureOfAilment}</Text>
                <Text style={styles.labelText}>Medicine Prescribed: {item.medicinePrescribed}</Text>
                <Text style={styles.labelText}>Procedure Undertaken: {item.procedureUndertaken}</Text>
                <Text style={styles.labelText}>Date of Next Appointment: {item.dateOfNextAppointment}</Text>
                <Button onPress={() => handleUpdate(item.id)} title="Update" color="pink" />
                <Button onPress={() => handleDelete(item.id)} title="Delete" color="pink" />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    button: {
      marginBottom: 8,
      backgroundColor: 'pink',
    },
    listItem: {
      marginBottom: 8,
    },
    idText: {
      fontWeight: 'bold',
    },
    labelText: {
      fontWeight: 'bold',
      marginBottom: 4,
    },
  });
export default ReadClinicalRecord;
