import { RiImageCircleLine } from 'react-icons/ri'

const Profile = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5'>
      <div className='bg-grey-light-extra p-6 flex items-center'>
        <div className='flex-shrink-0'>
          <label 
            htmlFor='img'
            className='w-[150px] h-[150px] flex flex-col justify-center items-center rounded-full bg-light border-2 border-grey-medium text-grey-dark cursor-pointer hover:bg-primary hover:text-light label'
          >
            <RiImageCircleLine className='text-4xl' />
            <span className='mt-2'>Select Image</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Profile
