import { Link } from 'react-router-dom'

const CreateNews = () => {
  return (
    <div>
      <div className='just-between mb-6 p-4'>
        <h2 className='text-xl font-medium uppercase'>Add News</h2>
        <Link className='hover:text-primary font-medium uppercase'>
          View All
        </Link>
      </div>
    </div>
  )
}

export default CreateNews