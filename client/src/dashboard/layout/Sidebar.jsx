import { Link, useLocation } from 'react-router-dom'
import { LuLayoutDashboard } from 'react-icons/lu'

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-[#ededed]'>
      <div className='h-[70px] flex justify-center items-center'>
        <Link to='/'>
          <span className='logo w-[190px] h-[35px]'>World News</span>
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        <li>
          <Link 
            to='/dashboard/admin' 
            className={`
              px-3 ${pathname === '/dashboard/admin' ?
              'bg-[#333] text-[#fffaf0]' :
              'bg-[#fffaf0] text-[#333]'} py-2 hover:shadow-lg hover:shadow-red-700/20 w-full rounded-lg flex gap-x-2 justify-start items-center hover:bg-[#ff4500] hover:text-[#fffaf0] 
            `}
          >
            <span><LuLayoutDashboard /></span>
            <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
