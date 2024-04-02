import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectButton } from 'primereact/selectbutton';
// import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import DataTable from './DataTable/DataTable.jsx'


import './Drives.css'
export default function Drives() {

  const navigate = useNavigate();
  const options = ['Placement', 'Internship'];
  const [value, setValue] = useState(options[0]);

  const addDrives = () => {
    navigate('/drives/add');
  };


  return (

    <>
      <div className="top_header">

        <header className="drives-header">
          <span className="pi pi-home"></span>
          <span className="pi pi-angle-right separator"></span>
          <span>Drives</span>
        </header>

        <nav className='header1'>
          <p>Total Drives ()</p>
          <i className="pi pi-plus addDrive" onClick={addDrives} style={{ color: 'white' }}></i>
        </nav>

        <div className="card flex justify-content-center b">
          <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} className="select-button" />
        </div>

      </div>
      <div className="dataTableContainer" style={{ width: '100%' }}>
        <div className="dataTableScroll">
          <DataTable />
        </div>
      </div>
    </>
  )
}
