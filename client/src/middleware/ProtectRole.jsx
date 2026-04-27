import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import storeContext from '../context/storeContext'

const ProtectRole = ({role}) => {
  const { store } = useContext(storeContext)

  if (store.userInfo.role === role) {
    return <Outlet />
  } else {
    return <Navigate to='/dashboard/unable-access' />
  }
}

ProtectRole.propTypes = {
  role: PropTypes.string.isRequired
}

export default ProtectRole
