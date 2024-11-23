const Header = () => {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-500'>
      <div className="w-full rounded h-[70px] flex justify-between items-center p-4 bg-[#fff9f5]">
        <input type='text' placeholder='Search' className='px-3 py-2 rounded-md outline-0 border border-[#bbb] focus:border-[#888] h-10' />
      </div>
    </div>
  )
}

export default Header
