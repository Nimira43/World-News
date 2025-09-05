import { Link } from 'react-router-dom'
import NewsContent from '../components/NewsContent'

const News = () => {

  const userInfo = {
    role: 'admin'
  }

  return (
    <div>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium uppercase'>News</h2>
        {
          userInfo.role !== 'admin' &&
            <Link
              className='text-grey-dark hover:text-primary font-medium uppercase'
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
