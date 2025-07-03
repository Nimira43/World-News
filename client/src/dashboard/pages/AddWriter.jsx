import { Link } from 'react-router-dom'

const AddWriter = () => {
  return (
    <div className='bg-light rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium uppercase'> Add Journalist</h2>
        <Link 
          to='/dashboard/writers'
          className='text-grey-dark hover:text-primary font-medium uppercase'
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
                className='w-48 px-3 py-2 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10 text-left'
              >
                <option 
                value=''>Select Status</option>
                <option value='pending'>International</option>
                <option value='active'>Business</option>
                <option value='deactive'>Health</option>
                <option value='deactive'>Entertainment</option>
                <option value='deactive'>Sport</option>
                <option value='deactive'>Technology</option>
                <option value='deactive'>Travel</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWriter
