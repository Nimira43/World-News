import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#fafafa'>
      <Sidebar />
      <div>
        <Header />
        <div className='p-4'>
          <div className='pt-[85px]'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
