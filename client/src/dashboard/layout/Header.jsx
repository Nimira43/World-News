import User from '../../assets/user-2.png'

const Header = () => {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-grey-light-extra'>
        <input type='text' placeholder='Search' className='px-3 py-2 rounded-md outline-0 bg-light border border-grey-medium focus:border-grey-dark h-10' />
        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
              <span className='font-semibold text-primary uppercase'>John Smith</span>
              <span className='text-grey-dark'>Admin</span>
            </div>
            <img className='10 h-10 rounded-full border-2 border-grey-medium' src={User} alt='User' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
