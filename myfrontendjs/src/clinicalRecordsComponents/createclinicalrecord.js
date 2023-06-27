import React, { useState } from 'react';
import './createclinicalrecord.css';
import axios from 'axios';
const CreateClinicalRecord = () => {
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUndertaken: '',
    dateOfNextAppointment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/clinical-records', formData);
      console.log(response)
      window.location.reload()
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
    <form onSubmit={handleSubmit}>
      <label>
        Clinic date:
        <input
          type="date"
          name="clinicDate"
          value={formData.clinicDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Nature of ailment:
        <input
          type="text"
          name="natureOfAilment"
          value={formData.natureOfAilment}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Medicine prescribed:
        <input
          type="text"
          name="medicinePrescribed"
          value={formData.medicinePrescribed}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Procedure undertaken:
        <input
          type="input"
          name="procedureUndertaken"
          value={formData.procedureUndertaken}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Date of next prescribed:
        <input
          type="date"
          name="dateOfNextAppointment"
          value={formData.dateOfNextAppointment}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateClinicalRecord;
