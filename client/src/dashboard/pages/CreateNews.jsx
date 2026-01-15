import { IoImagesOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import JoditEditor from 'jodit-react'
import { useState } from 'react'

const CreateNews = () => {
  const [loader, setLoader] = useState(false)

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
            <IoImagesOutline className='text-4xl' />
            <span className='mt-2 font-medium uppercase'>
              Select Image
            </span>  
          </label>
          <input 
              type='file'
              id='img'
              className='hidden' 
              required
            />
        </div>
        <div className='just-between mb-2 mt-4'>
          <label
            htmlFor='description'
            className='block text-md font-medium  uppercase'
          >
            Description
          </label>
          <div className='hover:text-primary hover-transition'>
            <IoImagesOutline className='text-2xl' />
          </div>
        </div>
        <JoditEditor
          className='w-full'
        />
          
        <div className='mt-4'>
          <button
            type='submit'
            disabled={loader}
            className='px-3 py-[6px] font-medium bg-grey-dark hover:bg-primary text-light uppercase rounded-md'
          >
            {loader 
              ? 'Loading,,,'
              : 'Add News'  
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateNews