import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import UpdateBioData from './update';
import CreateBioData from './create';

const ReadBioData = () => {
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
      const response = await axios.get('http://localhost:3000/biodata-of-patients');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3000/biodata-of-patients/${id}`);
      fetchData(); // Refetch the data after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id: any) => {
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
    return <CreateBioData />;
  }

  if (showUpdateForm) {
    return <UpdateBioData id={selectedId} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Button onPress={handleShowCreateForm} title="Create" color='pink'/>
          <Button onPress={handleClose} title="Back" color='pink'/>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>ID: {item.id}</Text>
              <Text style={styles.itemText}>First Name: {item.firstName}</Text>
              <Text style={styles.itemText}>Surname: {item.surName}</Text>
              <Text style={styles.itemText}>Middle Name: {item.middleName}</Text>
              <Text style={styles.itemText}>Date of Birth: {item.dateOfBirth}</Text>
              <Text style={styles.itemText}>Home Address: {item.homeAddress}</Text>
              <Text style={styles.itemText}>Date of Registration: {item.dateOfRegistration}</Text>
              <Text style={styles.itemText}>Matriculation Number: {item.matriculationNumber}</Text>
              <View style={styles.buttonContainer}>
                <Button onPress={() => handleUpdate(item.id)} title="Update" color={styles.vpink.color} />
                <Button onPress={() => handleDelete(item.id)} title="Delete" color={styles.vpink.color} />
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // White background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#FFC0CB', // VPINK background color
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#FFF', // White text color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  vpink: {
    color: '#FF1493', // VPINK color
  },
});

export default ReadBioData;
