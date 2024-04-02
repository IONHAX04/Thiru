import React, { useState, useRef } from 'react'

import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import axios from 'axios';
import { baseURL } from '../../101 utils/constants';
import { Toast } from 'primereact/toast';


import '../Drives.css'

export default function AddDrive() {

  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [placementType, setPlacementType] = useState(null);
  const [instituteType, setInstitute] = useState(null);
  const [offerType, setOfferType] = useState(null);
  const [editorValue, setEditorValue] = useState("");
  const [driveName, setDriveName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [location, setLocation] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  const toast = useRef(null);

  const driveType = [
    { name: 'Placement', code: 'Placement' },
    { name: 'Internship', code: 'Internship' }
  ];

  const placement = [
    { name: 'Full Time', code: 'Fulltime' },
    { name: 'Part Time', code: 'Parttime' },
    { name: 'Internship', code: 'internship' },
    { name: 'Internship + Full time', code: 'interncumfull' },
    { name: 'Intern with stipend', code: 'internwithstipend' },
    { name: 'Intern without stipend', code: 'internwithoutstipend' },
    { name: 'Training', code: 'Training' },
    { name: 'Training + Full time', code: 'Trainingwithfulltime' },
  ];

  const institute = [
    { name: 'Sona College of Technology', code: 'SCT' },
    { name: 'Poll Drive', code: 'others' },
  ];


  const offer = [
    { name: 'Full Time Campus Placement', code: 'fulltime' },
    { name: 'Internship Only', code: 'intern' },
    { name: 'Full time Internship cum Placement', code: 'internandplacement' },
    { name: 'Hire & Train', code: 'hire' },
    { name: 'Off Campus', code: 'offcampus' },
    { name: 'Hiring Through Contests', code: 'contests' },
  ];


  const showInfo = () => {
    toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
  }

  const addDrives = () => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      selectedType,
      placementType,
      instituteType,
      offerType,
      editorValue,
      driveName,
      companyName,
      companyURL,
      location
    };
    console.log("LIne 80-", formData);
    axios.post('http://localhost:5200/api/savedrive', formData).then((res) => {
      console.log("Response for drives", res.data);
      setSelectedType("");
      setPlacementType("");
      setInstitute("");
      setOfferType("");
      setEditorValue("");
      setDriveName("");
      setCompanyName("");
      setCompanyURL("");
      setLocation("");
      setUpdateUI((prevState) => !prevState);
      showToast('success', 'Drive added successfully!');
    }).catch((err) => {
      console.log("Error", err);
      showToast('error', 'Failed to add drive. Please try again.');
    })
  };

  const showToast = (severity, detail) => {
    toast.current.show({ severity, detail });
  };

  return (
    <div className='driveAdd'>
      {/* DRIVE HEADER */}
      <header className="drives-header">
        <span className="pi pi-home"></span>
        <span className="pi pi-angle-right separator"></span>
        <span onClick={addDrives}>Drives</span>
        <span className="pi pi-angle-right separator"></span>
        <span>Add Drives</span>
      </header>


      {/* CREATION OF DRIVES */}
      <div className="createDrives">
        <div className="top_nav">
          <p>Create Drives</p>
          <i className="pi pi-chevron-left addDrive" onClick={addDrives} style={{ color: 'white' }}></i>
        </div>

        {/* DRIVE INPUT FIELDS */}
        <form onSubmit={handleSubmit} className="driveInputField">
          <p>Drive Contents</p>
          <div className="driveContents row card flex flex-column md:flex-row gap-3">
            <div className="col-lg-5 col-md-12 mb-3 flex-1">
              <div className="driveFields">
                <p>Drive Type</p>
                <div className="card flex justify-content-center">
                  <Dropdown
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.value)}
                    options={driveType}
                    optionLabel="name"
                    placeholder="Select Drive Type"
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }} />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 mb-3 flex-1">
              <div className="driveFields">
                <p>Placement Type</p>
                <div className="card flex justify-content-center">
                  <MultiSelect
                    value={placementType}
                    onChange={(e) => setPlacementType(e.value)}
                    options={placement} optionLabel="name"
                    placeholder="Select placement Type"
                    maxSelectedLabels={3}
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }} />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 mb-3 flex-1">
              <div className="driveFields">
                <p>Institute</p>
                <div className="card flex justify-content-center">
                  <MultiSelect
                    value={instituteType}
                    onChange={(e) => setInstitute(e.value)}
                    options={institute} optionLabel="name"
                    placeholder="Select Institute Type"
                    maxSelectedLabels={3}
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }} />
                </div>
              </div>
            </div>
          </div>

          <Divider className='divider' />

          <p>Company Details</p>
          <div className="driveContents row">
            <div className="col-lg-5 col-md-12 mb-3 flex-1">
              <div className="driveFields">
                <p>Drive Name</p>
                <div className="card flex justify-content-center">
                  <InputText
                    value={driveName}
                    onChange={(e) => setDriveName(e.target.value)}
                    placeholder="Enter Drive Name"
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 mb-3 flex-1">
              <div className="driveFields">
                <p>Company Name</p>
                <div className="card flex justify-content-center">
                  <InputText
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter Company Name"
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 mb-3 flex-1">
              <div className="driveFields">
                <p>Company URL</p>
                <div className="card flex justify-content-center">
                  <InputText
                    value={companyURL}
                    onChange={(e) => setCompanyURL(e.target.value)}
                    placeholder="Enter Company URL"
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }}
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="driveContents row">
            <div className="col-lg-5 col-md-12 mb-3">
              <div className="driveFields">
                <p>Location</p>
                <div className="card flex justify-content-center">
                  <InputText
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Job Location"
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 mb-3">
              <div className="driveFields">
                <p>Offer Type</p>
                <div className="card flex justify-content-center">
                  <MultiSelect
                    value={offerType}
                    onChange={(e) => setOfferType(e.value)}
                    options={offer} optionLabel="name"
                    placeholder="Select Offer Type"
                    maxSelectedLabels={3}
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }} />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 mb-3">
              <div className="driveFields">
                <p>Salary</p>
                <div className="card flex justify-content-center">
                  <InputText
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter Company Name"
                    className="w-full"
                    style={{ padding: '3px 7px 3px 15px', width: '14rem' }}
                  />
                </div>
              </div>
            </div>
          </div>



          <p>Drive Description</p>
          <div className="driveContents row" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ width: '90%' }}>
              <Editor
                value={editorValue}
                onTextChange={(e) => setEditorValue(e.htmlValue)}
                style={{ height: '300px' }} />
            </div>
          </div>


          <div className="buttons">
            <Button label="Close" severity="danger" className='button' style={{ width: '12rem' }} />
            <Button label="Save" severity="secondary" className='button' style={{ width: '12rem' }} />
            <Button label="Save & Next" type="submit" severity="success" className='button' style={{ width: '12rem' }} />
          </div>
        </form>
      </div>

      <Toast ref={toast} className='btn' />
      {/* <Button label="Info" severity="info" onClick={showInfo} /> */}
    </div>
  )
}
