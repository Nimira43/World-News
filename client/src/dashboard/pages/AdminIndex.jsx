import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import news from '../../assets/user-1.png'

const AdminIndex = () => {
  return (
    <div className='mt-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {[
          {title: 'Current News', value: 173},
          {title: 'Pending News', value: 63},
          {title: 'Edit News', value: 19},
          {title: 'Delete News', value: 48},
          {title: 'Create News', value: 16},
        ].map((start, i) => (
          <div
            key={i}
            className='p-8 bg-grey-light rounded-md shadow-md flex flex-col items-center gap-2' 
          >
            <span
              className='text-4xl font-medium text-primary'
            >
              {start.value}
            </span>
            <span
              className='text-md font-normal text-grey-dark uppercase'
            >
              {start.title}
            </span>
          </div>
        ))}
      </div>
      <div className='bg-light p-6 mt-8'>
        <div className='flex justify-between items-center pb-4'>
          <h2 className='text-grey-dark font-medium text-xl uppercase'>Recent News</h2>
          <Link 
            to='/news'
            className='text-grey-dark hover:text-primary font-medium uppercase'
          >
            View All
          </Link>
        </div>
        <div className='overflow-x-auto mt-6'>
          <table className='w-full table-auto bg-light shadow-lg rounded-md overflow-hidden'>
            <thead className='bg-grey-light text-primary uppercase text-sm'>
              <tr>
                <th className='py-4 px-6 text-left'>No</th>
                <th className='py-4 px-6 text-left'>Title</th>
                <th className='py-4 px-6 text-left'>Image</th>
                <th className='py-4 px-6 text-left'>Category</th>
                <th className='py-4 px-6 text-left'>Description</th>
                <th className='py-4 px-6 text-left'>Date</th>
                <th className='py-4 px-6 text-left'>Status</th>
                <th className='py-4 px-6 text-left'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-grey-light text-dark'>
              {[1, 2, 3].map((item, index) => (
                <tr
                  key={index}
                  className='border-t'
                >
                  <td className='py-4 px-6'>1</td>
                  <td className='py-4 px-6'>News Story</td>
                  <td className='py-4 px-6'>
                    <img
                      className='h-10 w-10 rounded-full object-cover'
                      src={news}
                      alt='news image'
                    />
                  </td>
                  <td className='py-4 px-6'>News Category</td>
                  <td className='py-4 px-6'>Description</td>
                  <td className='py-4 px-6'>10/05/2025</td>
                  <td className='py-4 px-6'>
                    <span className='px-3 py-1 bg-primary text-light rounded-md text-xs font-medium uppercase'>Active</span>
                  </td>
                  <td className='py-4 px-6'>
                    <div className='flex gap-3'>
                      <Link to='#' className='p-2 bg-grey-light-extra text-primary rounded-full hover:bg-primary-light'>
                        <IoEyeOutline />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminIndex
