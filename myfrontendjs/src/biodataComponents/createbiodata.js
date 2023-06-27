import React, { useState } from 'react';
import './form.css';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:3000/biodata-of-patients', formData);
      window.location.reload();
      console.log(response.data); // Handle the response from the backend
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

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            name="surName"
            value={formData.surName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Home Address:
          <input
            type="text"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Registration:
          <input
            type="date"
            name="dateOfRegistration"
            value={formData.dateOfRegistration}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Matriculation Number:
          <input
            type="text"
            name="matriculationNumber"
            value={formData.matriculationNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBioData;
