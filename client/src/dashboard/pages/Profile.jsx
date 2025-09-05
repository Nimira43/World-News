import { RiImageCircleLine } from 'react-icons/ri'

const Profile = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5'>
      <div className='p-6 flex items-center'>
        <div className='flex-shrink-0'>
          <label 
            htmlFor='img'
            className='w-[150px] h-[150px] flex flex-col justify-center items-center rounded-full bg-grey-light-extra border-2 border-grey-medium text-grey-dark cursor-pointer hover:bg-primary label'
          >
            <RiImageCircleLine />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Profile
