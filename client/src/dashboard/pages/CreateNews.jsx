import { Link } from 'react-router-dom'

const CreateNews = () => {
  return (
    <div>
      <div className='just-between mb-6 p-4'>
        <h2 className='text-xl font-medium uppercase'>Add News</h2>
        <Link
          to='/dashboard/news'
          className='hover:text-primary font-medium uppercase'>
          View All
        </Link>
      </div>

      <form>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='title' 
                className='block text-grey-dark uppercase text-md font-medium mb-2'
              >
                Title  
              </label>
              <input
                id='name' 
                type='text' 
                name='name'
                required
                className='input-field' 
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
                className='input-field text-left'
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
                className='input-field' 
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
                className='input-field' 
              />
            </div>
          </div>
          <div className='mt-4'>
            <button
              className='px-3 py-[6px] font-medium bg-grey-dark hover:bg-primary text-light uppercase rounded-md'
            >
              Add Nres
            </button>
          </div>
        </form>

    </div>
  )
}

export default CreateNews