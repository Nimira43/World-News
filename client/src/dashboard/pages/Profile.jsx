import { RiImageCircleLine } from 'react-icons/ri'

const Profile = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5'>
      <div className='bg-grey-light-extra p-6 flex items-center rounded-md'>
        <div className='flex-shrink-0'>
          <label 
            htmlFor='img'
            className='w-[150px] h-[150px] flex flex-col justify-center items-center rounded-full bg-light border-2 border-grey-medium text-grey-dark cursor-pointer hover:bg-primary hover:text-light label'
          >
            <RiImageCircleLine className='text-4xl' />
            <span className='mt-2'>Select Image</span>
            <input 
              type='file'
              id='img'
              className='hidden' 
            />
          </label>
        </div>
        <div className='ml-6 text-grey-dark flex flex-col space-y-2'>
          <h3 className='text-xl font-medium'>John Smith</h3>
          <p className='text-sm font-medium'>Email: <span className='font-normal'>j.smith@world-news.com</span></p>
          <p className='text-sm font-medium'>Category: <span className='font-normal'>Sport</span></p>
        </div>
      </div>

      <div className='bg-grey-light-extra p-6 text-grey-dark'>
        <h2 className='font-medium text-xl text-center mb-5'>Change Password</h2>
        <form>
          <div className='space-y-4'>
            <div>
              <label 
                htmlFor='current-password'
                className='block text-sm font-medium'
              >
                Current Password
              </label>
              <input 
                type='text' 
                id='current-password'
                name='current-password'
                placeholder='Enter current password' 
                className='w-full px-3 py-2 mt-2 rounded-md outline-0 bg-light border border-grey-medium focus:border-grey-dark h-10' 
              />
            </div>
            <div>
              <label 
                htmlFor='new_password'
                className='block text-sm font-medium'
              >
                New Password
              </label>
              <input 
                type='text' 
                id='new_password'
                name='new_password'
                placeholder='Enter new password' 
                className='w-full px-3 py-2 mt-2 rounded-md outline-0 bg-light border border-grey-medium focus:border-grey-dark h-10' 
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
