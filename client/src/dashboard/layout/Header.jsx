import { useContext } from 'react'
import User from '../../assets/user-2.png'
import storeContext from '../../context/storeContext'

const Header = () => {
  const { store } = useContext(storeContext)

  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] just-between p-4 bg-grey-light'>
        <input 
          type='text' 
          placeholder='Search' 
          className='search-bar px-3 py-2' 
        />
        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
              <span className='font-semibold text-primary uppercase'
              >
                {store.userInfo?.name}
              </span>
              <span className='text-grey-dark'>
                {store.userInfo?.role}
              </span>
            </div>
            <img 
              className='10 h-10 rounded-full border-2 border-grey-medium' 
              src={User} 
              alt='User' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
