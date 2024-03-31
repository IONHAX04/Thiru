import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/00 Navbar/Navbar.jsx'
import Login from './components/01 Login/Login/Login.jsx'
import SignUp from './components/01 Login/SignUp/SignUp.jsx'
import Dashboard from './components/02 Dashboard/Dashboard.jsx'
import Drives from './components/03 Drives/Drives.jsx'
import Courses from './components/04 Courses/Courses.jsx'
import QuestionBank from './components/05 Question Banks/QuestionBank.jsx'
import Reports from './components/06 Reports/Reports.jsx'
import Analysis from './components/07 Analysis/Analysis.jsx'
import Updates from './components/08 Updates/Updates.jsx'
import Settings from './components/09 Settings/Settings.jsx'
import Profile from './components/10 Profile/Profile.jsx'
import NotFound from './components/11 Not Found/NotFound.jsx'

import AddDrive from './components/03 Drives/AddDrives/AddDrive.jsx'

import { useNavigate } from 'react-router-dom';


import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Navbar>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/drives/*' element={<NestedDrives />} />
            <Route path='/drives' element={<Drives />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/questionbank' element={<QuestionBank />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/analysis' element={<Analysis />} />
            <Route path='/updates' element={<Updates />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  )
}


function NestedDrives() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Drives navigate={navigate} />} />
      <Route path='/add' element={<AddDrive />} />
    </Routes>
  );
}

export default App
