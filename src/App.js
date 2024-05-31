import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'
import Community from './pages/Community/Community'
import Error from './pages/Error/Error'

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
        <Routes>
        <Route path="/" element={<Navigate to="SportSee"/>}/>
          <Route path="/SportSee" element={<Home/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        </Router>
      </React.StrictMode>
    </div>
  )
}

export default App;
