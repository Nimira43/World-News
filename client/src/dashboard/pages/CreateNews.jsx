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
        <div>
          <label
            htmlFor='title'
            className='block text-md font-medium text-grey-medium mb'
          >
            Title
          </label>
        </div>


      </form>


    </div>
  )
}

export default CreateNews