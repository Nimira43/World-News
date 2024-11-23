import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from './dashboard/pages/Login'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login /> }/>
        <Route path='/dashboard' element={<MainLayout />}>
        <Route path='admin' element={<AdminIndex />}/>
        </Route>
      </Routes>
      
      </BrowserRouter> 
    </div>
  )
}

export default App

