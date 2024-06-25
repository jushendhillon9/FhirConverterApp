import React, { useState } from 'react';
import csvLogo from './assets/CSV-icon.png';
import fhirLogo from './assets/Fhir-Icon.png';
import jsonLogo from './assets/JSON-Icon.png';
import arrow from './assets/Arrow.webp';
import DragAndDrop from './components/DragAndDrop';
import DropdownMenu from './components/DropdownMenu'
import './App.css';

function App() {
  const [projectId, setProjectId] = useState('');
  const [bucketsAndObjects, setBucketsAndObjects] = useState('');

  const handleChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleSubmitId = () => {
    const accessToken = localStorage.getItem('accessToken');
    const requestBody = accessToken + ',' + projectId;

    fetch('http://localhost:8080/api/listBucketsAndObjects', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: requestBody,
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Failed to fetch buckets');
        }
      })
      .then((data) => {
        setBucketsAndObjects(data);
        // Further processing of data if needed
      })
      .catch((error) => {
        console.error('Error fetching buckets:', error.message);
      });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbarText">FhirConverter App</div>
        <div className="linebreak"></div>
        <div className="conversionExplained">Convert your CSV/JSON File to FHIR 🔥</div>
        <div className="linebreak"></div>
      </nav>
      <div className="model">Follow the Model: </div>
      <div className="wrapper">
        <div className="convertee">
          <img src={csvLogo} className="logo" alt="CSV logo" />
          <p id="ampersand">||</p>
          <img src={jsonLogo} className="logo" alt="JSON logo" />
        </div>
        <div className="arrowExplained">
          <img src={arrow} className="arrow" alt="Arrow" />
        </div>
        <img src={fhirLogo} className="logo react" alt="FHIR logo" />
      </div>
      <div>
        <DragAndDrop />
      </div>
      <div className = "gcpBucketConversion">
        <div className = "gcpConversionHeader"> To convert your GCS buckets, input project specific ID</div>
        <input
          type="text"
          value={projectId}
          onChange={handleChange}
          placeholder="Enter text"
          className = "textbox"
        />
        <button className = "gcpSubmitButton" onClick={handleSubmitId}>Submit</button>
        {bucketsAndObjects && (
          <DropdownMenu givenProjectId={projectId} bucketsAndObjects={bucketsAndObjects} />
        )}
      </div>
    </>
  );
}

export default App;
