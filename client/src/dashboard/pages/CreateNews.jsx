import { RiImageCircleLine } from 'react-icons/ri'
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
            className='block text-grey-dark uppercase text-md font-medium mb-2'
          >
            Title  
          </label>
          <input
            id='title' 
            type='text' 
            name='title'
            required
            className='w-full input-field' 
          />
        </div>
        <div>
          <label 
            htmlFor='img' 
            className='w-full h-[240px] mt-4 rounded-md image-label'
          >
            <RiImageCircleLine className='text-4xl' />
            <span className='mt-2 font-medium uppercase'>
              Select Image
            </span>
            <input 
              type='file'
              id='img'
              className='hidden' 
              required
            />
          </label>
        </div>
          
        <div className='mt-4'>
          <button
            className='px-3 py-[6px] font-medium bg-grey-dark hover:bg-primary text-light uppercase rounded-md'
          >
            Add News
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateNews