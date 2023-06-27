import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBiodata from './biodataComponents/createbiodata';
import ReadBioData from './biodataComponents/readbiodata';
import UpdateBioData from './biodataComponents/updatebiodata';
import ReadClinicalRecord from './clinicalRecordsComponents/readclinicalrecord';
import HomePage from './home';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/view" element={<ReadBioData />} />
                <Route path="/create" element={<CreateBiodata />} />
                <Route path="/update" element={<UpdateBioData/>} />
                <Route path="/viewrecords" element={<ReadClinicalRecord />} />
            </Routes>
        </Router>
    )
}
export default App