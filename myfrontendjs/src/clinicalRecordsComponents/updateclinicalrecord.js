import React, { useState, useEffect} from 'react';
import axios from 'axios';

const UpdateClinicalRecord = ({id}) => {
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUndertaken: '',
    dateOfNextAppointment: ''
  });

  useEffect(() => {
    fetchRecord();
  }, [id]);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/clinical-records/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/clinical-records/${id}`, formData);
      window.location.reload()
      // Handle successful update
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <label>
     Clinic date:
        <input
          type="date"
          name="clinicDate"
          value={formData.clinicDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
      Nature of ailment:
        <input
          type="text"
          name="natureOfAilment"
          value={formData.natureOfAilment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
      Medicine prescribed:
        <input
          type="text"
          name="medicinePrescribed"
          value={formData.medicinePrescribed}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
      Procedure undertaken:
        <input
          type="input"
          name="procedureUndertaken"
          value={formData.procedureUndertaken}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
      Date of next prescribed:
        <input
          type="date"
          name="dateOfNextAppointment"
          value={formData.dateOfNextAppointment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Change</button>
    </form>
  );
};

export default UpdateClinicalRecord;
