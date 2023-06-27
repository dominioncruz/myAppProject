import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './form.css'
const UpdateBioData = ({id}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateOfRegistration: '',
    matriculationNumber: '21120612475', // Default value
  });

  useEffect(() => {
    fetchRecord();
  }, [id]);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/biodata-of-patients/${id}`);
      setFormData(response.data);
      console.log(response.data)
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
      await axios.patch(`http://localhost:3000/biodata-of-patients/${formData.id}`, formData);
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
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Change</button>
    </form>
  );
};

export default UpdateBioData;
