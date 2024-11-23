import User from '../../assets/user.png'

const Header = () => {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-[#fff9f5]'>
        <input type='text' placeholder='Search' className='px-3 py-2 rounded-md outline-0 border border-[#888] focus:border-[#333] h-10' />
        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
              <span className='font-semibold'>John Smith</span>
              <span>Administrator</span>
            </div>
            <img className='10 h-10 rounded-full border-2 border-[#888]' src={User} alt='User' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
