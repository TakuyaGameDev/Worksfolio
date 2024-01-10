import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import Login from './pages/Login'
import Main from './pages/Main'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    {/* <Link to='/'>Back To Top</Link>*/}
  </BrowserRouter>
)
