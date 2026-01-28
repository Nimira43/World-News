import { IoClose, IoImageOutline } from 'react-icons/io5'

const Gallery = ({ setShow, images }) => {
  return (  
    <div className='w-screen h-screen fixed left-0 top-0 z-[9999]'>
      <div className='w-full h-full relative'>
        <div className='bg-grey-medium opacity-80 w-full h-full absolute top-0 left-0 z-[998]'></div>
        <div className='absolute bg-light w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]'>
          <div className='pb-3 just-between w-full'>
            <h2>Gallery</h2>
            <div
              onClick={() => setShow(false)}
              className='text-xl cursor-pointer'
            >
              <IoClose />
            </div>
          </div>
          <div>
            <label
              htmlFor='images'
              className={`w-full h-[180px] centre rounded text-grey-dark gap-2 cursor-pointer border border-dashed border-grey-medium hover:border-grey-dark hover-transition`}
            >
              <div className='centre flex-col gap-y-2 '>
                <span className='text-2xl'>
                  <IoImageOutline />
                </span><span>Select Image</span>
              </div>
            </label>
          </div>
          <div className='grid grid-cols-4 gap-x-2 mt-4'>
            <div className='cursor-pointer'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Gallery