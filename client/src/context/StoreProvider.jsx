import { useReducer } from 'react'
import storeReducer from './storeReducer'
import storeContext from './storeContext'
import decodeToken from '../utils'

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, {
    userInfo: decodeToken(localStorage.getItem('newsItem')),
    token: localStorage.getItem('newsToken') || ''
  })

  return (
    <storeContext.Provider value={{store, dispatch}}>
      {children}
    </storeContext.Provider>
  )
}
 
export default StoreProvider