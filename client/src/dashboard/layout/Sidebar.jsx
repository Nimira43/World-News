import { Link, useLocation } from 'react-router-dom'
import { LuLayoutDashboard } from 'react-icons/lu'
import { TiNews } from 'react-icons/ti'
import { TbPencilPlus } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
import { AiTwotoneProfile } from 'react-icons/ai'
import { BiLayerPlus } from 'react-icons/bi'

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-grey-light'>
      <div className='h-[70px] flex justify-center items-center'>
        <Link to='/'>
          <span className='logo w-[190px] h-[35px]'>World News</span>
        </Link>
      </div>
      <ul className='px-3 flex flex-col gap-y-1 font-medium'>
        <li>
          <Link 
            to='/dashboard/admin' 
            className={`
              px-3 ${pathname === '/dashboard/admin' ?
              'bg-grey-dark text-light' :
              'bg-light text-grey-dark'} py-2 hover:shadow-lg hover:shadow-red-700/20 w-full rounded-md uppercase flex gap-x-2 justify-start items-center hover:bg-primary hover:text-light 
            `}
          >
            <span className='text-18px'><LuLayoutDashboard /></span>
            <span className='text-18px'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link 
            to='/dashboard/news' 
            className={`
              px-3 ${pathname === '/dashboard/news' ?
              'bg-grey-dark text-light' :
              'bg-light text-grey-dark'} py-2 w-full rounded-md uppercase flex gap-x-2 justify-start items-center hover:bg-primary hover:text-light 
            `}
          >
            <span className='text-18px'><TiNews /></span>
            <span className='text-18px'>News</span>
          </Link>
        </li>
        <li>
          <Link 
            to='/dashboard/news/create' 
            className={`
              px-3 ${pathname === '/dashboard/news/create' ?
              'bg-grey-dark text-light' :
              'bg-light text-grey-dark'} py-2 w-full rounded-md uppercase flex gap-x-2 justify-start items-center hover:bg-primary hover:text-light 
            `}
          >
            <span className='text-18px'><BiLayerPlus /></span>
            <span className='text-18px'>Add News</span>
          </Link>
        </li>
        <li>
          <Link 
            to='/dashboard/writers/add' 
            className={`
              px-3 ${pathname === '/dashboard/writers/add' ?
              'bg-grey-dark text-light' :
              'bg-light text-grey-dark'} py-2 w-full rounded-md uppercase flex gap-x-2 justify-start items-center hover:bg-primary hover:text-light 
            `}
          >
            <span className='text-18px'><TbPencilPlus /></span>
            <span className='text-18px'>Add Journalist</span>
          </Link>
        </li>
        <li>
          <Link 
            to='/dashboard/writers' 
            className={`
              px-3 ${pathname === '/dashboard/writers' ?
              'bg-grey-dark text-light' :
              'bg-light text-grey-dark'} py-2 w-full rounded-md uppercase flex gap-x-2 justify-start items-center hover:bg-primary hover:text-light 
            `}
          >
            <span className='text-18px'><BsPencilSquare /></span>
            <span className='text-18px'>Journalists</span>
          </Link>
        </li>
        <li>
          <Link 
            to='/dashboard/profile' 
            className={`
              px-3 ${pathname === '/dashboard/profile' ?
              'bg-grey-dark text-light' :
              'bg-light text-grey-dark'} py-2 w-full rounded-md uppercase flex gap-x-2 justify-start items-center hover:bg-primary hover:text-light 
            `}
          >
            <span className='text-18px'><AiTwotoneProfile /></span>
            <span className='text-18px'>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
