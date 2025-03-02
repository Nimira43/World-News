import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from './dashboard/pages/Login'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/dashboard'
            element={<ProtectDashboard />}
          >
            <Route
              path=''
              element={<MainLayout />}
            >
              
              <Route
                path=''
                element={<Navigate to='/dashboard/admin' />}
              />

              <Route
                path=''
                element={<ProtectRole role='admin' />}
              >
                <Route
                  path='admin'
                  element={<AdminIndex />}
                />
              </Route>
              
            </Route>
          
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App

