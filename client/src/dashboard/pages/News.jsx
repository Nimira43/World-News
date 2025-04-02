import { Link } from 'react-router-dom'
import NewsContent from '../components/NewsContent'

const News = () => {

  const userInfo = {
    role: 'admin'
  }

  return (
    <div className='bg-grey-light rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>News</h2>
        {
          userInfo.role !== 'admin' &&
            <Link
              className='px-4 py-[8px] bg-grey-dark rounded-lg text-light hover:bg-primary'
              to='/dashboard/news/create' 
            >
              Create News Story
            </Link>
        }
      </div>
      <NewsContent />
    </div>
  )
}

export default News
