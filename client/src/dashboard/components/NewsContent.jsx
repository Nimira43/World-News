import { Link } from 'react-router-dom'
import profile from '../../assets/user.png'

const NewsContent = () => {
  return (
    <div className='bg-light min-h-screen p-6'>
      <div className='flex items-center gap-4 mb-6'>
        <select name='status' className='w-48 px-4 py-2 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10'>
          <option value=''>Select Status</option>
          <option value='pending'>Pending</option>
          <option value='active'>Active</option>
          <option value='deactive'>Deactive</option>
        </select>
        <input type='text' placeholder='Search' className='w-full px-4 py-4 rounded-md border border-grey-medium outline-0 focus:border-grey-dark h-10' />
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full table-auto bg-light shadow-lg rounded-lg overflow-hidden'>
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
          <tbody className='bg-grey-light'>
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
                    src={profile}
                    alt="news image"
                  />
                </td>
                <td className='py-4 px-6'>News Category</td>
                <td className='py-4 px-6'>Description</td>
                <td className='py-4 px-6'>10/05/2025</td>
                <td className='py-4 px-6'>
                  <span className='px-3 py-1 bg-green-500 text-light rounded-full text-xs font-medium'>Active</span>
                </td>
                <td className='py-4 px-6'>
                  <div className='flex gap-3'>
                    <Link>
                      
                    </Link>
                  </div>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NewsContent
