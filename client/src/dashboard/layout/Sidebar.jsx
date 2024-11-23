import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-[#4a9f9f]'>
      <div className='h-[70px] flex justify-center items-center'>
        <Link to='/'>
          <span className='logo w-[190px] h-[35px]'>World News</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
