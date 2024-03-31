import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom';

import './Drives.css'
export default function Drives() {

  const navigate = useNavigate();

  const addDrives = () => {
    navigate('/drives/add');
  };

  return (

    <>
      <header className="drives-header">
        <span className="pi pi-home"></span>
        <span className="pi pi-angle-right separator"></span>
        <span>Drives</span>
      </header>

      <nav className='header1'>
        <p>Total Drives ()</p>
        <i className="pi pi-plus addDrive" onClick={addDrives} style={{ color: 'white' }}></i>
      </nav>
    </>
  )
}
