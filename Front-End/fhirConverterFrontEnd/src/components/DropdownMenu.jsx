import React, { useState } from 'react';
import "./DropdownMenu.css";

const DropdownMenu = ({ givenProjectId, bucketsAndObjects }) => {
  const [isBucketOrObject, setIsBucketOrObject] = useState("Bucket");
  const [objects, setObjects] = useState([]);
  const [selectedBucketName, setSelectedBucketName] = useState("")
  const [selectedObjectName, setSelectedObjectName] = useState("")
  const [selectedObject, setSelectedObject] = useState(null);
  const projectId = givenProjectId;


  const lines = bucketsAndObjects.split('\n');

  const buckets = lines
    .filter(line => line.startsWith('Bucket:'))
    .map(line => {
      return line.split(':')[1].trim();
    });

  const handleBucketeClick = (bucket) => {
    setSelectedBucketName(bucket);
    const bucketIndex = lines.findIndex(line => line.startsWith(`Objects in ${bucket}:`));
    const objectsForBucket = [];

    if (bucketIndex !== -1) {
      for (let i = bucketIndex + 1; i < lines.length; i++) {
        if (lines[i].startsWith('Bucket:') || lines[i].startsWith('Objects in ')) {
          break;
        }
        if (lines[i].trim()) {
          objectsForBucket.push(lines[i].trim());
        }
      }
    }
    setObjects(objectsForBucket);
    setIsBucketOrObject('Object');
    console.log(objectsForBucket);
  };

  const handleObjectClick = (object) => {
    setSelectedObject(object);
    setSelectedObjectName(object);
  }

  const convertObjectToFhir = () => { //needs to grab the selected bucketName and selectedObject name
    const accessToken = localStorage.getItem('accessToken');
    const requestBody = projectId + "," + selectedObjectName + "," + selectedBucketName + "," + accessToken;
    fetch("http://localhost:8080/api/objectToConvert", {
      method: "POST",
      body: requestBody
    })
    .then((response) => {
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Failed to fetch buckets');
      }
    })
    .then((blob) => {
      console.log(blob);
      const convertedURL = URL.createObjectURL(blob);
      // Further processing of data if needed
      const downloadLink = document.createElement('a');
      downloadLink.href = convertedURL;
  
      // Specify the default file name, necessary
      downloadLink.download = 'convertedResource.json';
  
      // Append the link to the DOM
      document.body.appendChild(downloadLink);
  
      // Programmatically click the link to start the download
      downloadLink.click();
  
      // Clean up by removing the link from the DOM
      document.body.removeChild(downloadLink);
    })
    .catch((error) => {
      console.error('Error fetching buckets:', error.message);
    });
  }

  return (
    <div className="dropdown">
      {isBucketOrObject === "Bucket" ? (
        <div className="header">All Buckets: </div>
      ) : (
        <div className="header">Files: </div>
      )}
      <div className="linebreak"></div>
        {isBucketOrObject === 'Bucket' ? (
          buckets.map((bucket, index) => (
            <div className="dropdown-menu" key={index}>
              <div className="linebreak"></div>
              <button onClick={() => handleBucketeClick(bucket)} className="bucketOption">
                {bucket}
              </button>
            </div>
          ))
        ) : (
          <>
            {
              objects.map((object, index) => (
                <div className="dropdown-menu" key={index}>
                  <div className="linebreak"></div>
                  <button onClick={() => handleObjectClick(object)} className={selectedObject === object ? "objectOptionClicked" : "objectOption"}>{object}</button> 
                </div>
            ))}
            {isBucketOrObject === 'Object' && 
              <button className = "objectConvertButton" onClick = {convertObjectToFhir}>Convert File</button>
            }
          </>
        )}
    </div>
  );
};

export default DropdownMenu;
