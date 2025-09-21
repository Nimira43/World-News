import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddWriter = () => {
  const [loader, setLoader] = useState(false)

  return (
    <div>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium uppercase'> Add Journalist</h2>
        <Link 
          to='/dashboard/writers'
          className='hover:text-primary font-medium uppercase'
        >
          Journalists
        </Link>
      </div>

      <div className='p-4'>
        <form>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='name' 
                className='text-grey-dark uppercase text-md'
              >
                Name  
              </label>
              <input
                id='name' 
                type='text' 
                name='name'
                required
                className='px-3 py-2 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10' 
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='name' 
                className='text-grey-dark uppercase text-md'
              >
                Category  
              </label>
              <select
                id='name' 
                name='category'
                required 
                className='px-3 py-2 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10 text-left'
              >
                <option 
                value=''>Select Status</option>
                <option value='International'>International</option>
                <option value='Sport'>Sport</option>
                <option value='Business'>Business</option>
                <option value='Technology'>Technology</option>
                <option value='Health'>Health</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='Travel'>Travel</option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='email' 
                className='text-grey-dark uppercase text-md'
              >
                Email  
              </label>
              <input
                id='email' 
                type='email' 
                name='email'
                required
                className='px-3 py-2 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10' 
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='password' 
                className='text-grey-dark uppercase text-md'
              >
                Password  
              </label>
              <input
                id='password' 
                type='password' 
                name='password'
                required
                className='px-3 py-2 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10' 
              />
            </div>
          </div>
          <div className='mt-4'>
            <button
            disabled={loader}
              className='px-3 py-[6px] font-medium bg-grey-dark hover:bg-primary text-light uppercase rounded-md'
            >
              {loader 
                ? 'Loading,,,'
                : 'Add Journalist'  
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWriter
