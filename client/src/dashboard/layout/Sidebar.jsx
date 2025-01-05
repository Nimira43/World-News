import { Link, useLocation } from 'react-router-dom'

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
          <Link to='/dashboard/admin' className={`px-3 ${pathname}`}>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
