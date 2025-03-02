import { Navigate, Outlet } from "react-router-dom"

const ProtectRole = ({role}) => {

  const userInfo = {
    name: 'User',
    role: 'admin'
  }
  if (userInfo.role === role) {
    return <Outlet />
  } else {
    return <Navigate />
  }
}

export default ProtectRole
