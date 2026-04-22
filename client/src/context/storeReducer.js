import decodeToken from '../utils'

const storeReducer = (state, action) => {
  const { type, payload } = action

  if (type === 'login_success') {
    state.token = payload.token
    state.userInfo = decodeToken(payload.token)
  }

  if (type === 'logout') {
    state.token = ''
    state.info = ''
  }
  return state
}

export default storeReducer