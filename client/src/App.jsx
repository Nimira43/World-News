import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from './dashboard/pages/Login'
import MainLayout from './dashboard/layout/MainLayout'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login /> }/>
      </Routes>
      <Route path='/dashboard' element={<MainLayout />}>

      </Route>
      </BrowserRouter> 
    </div>
  )
}

export default App

