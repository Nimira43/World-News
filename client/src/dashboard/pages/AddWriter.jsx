import { Link } from 'react-router-dom'

const AddWriter = () => {
  return (
    <div className='bg-light rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium uppercase'> Add Journalist</h2>
        <Link className='text-grey-dark hover:text-primary font-medium uppercase'></Link>
      </div>
    </div>
  )
}

export default AddWriter
