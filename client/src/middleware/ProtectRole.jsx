import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectRole = ({role}) => {

  const userInfo = {
    name: 'User',
    role: 'writer'
  }
  if (userInfo.role === role) {
    return <Outlet />
  } else {
    return <Navigate to='/dashboard/unable-access' />
  }
}

ProtectRole.propTypes = {
  role: PropTypes.string.isRequired
}

export default ProtectRole
