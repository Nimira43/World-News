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
          <div className=' grid grid-cols-2 gap-x-8 mb-3'>
            <label 
              htmlFor='name' 
              className='text-grey-dark uppercase text-md'
            >
              Name  
            </label>
            <input 
              type='text' 
              name='name'
              required
              className='px3 py-2 rounded-md'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWriter
