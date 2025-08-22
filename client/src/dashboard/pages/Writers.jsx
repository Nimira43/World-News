import { FiEdit2 } from "react-icons/fi"
import { GoTrash } from "react-icons/go"
import { IoEyeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Writers = () => {
  return (
    <div className='bg-light min-h-screen p-6'>
      
      <div className='overflow-x-auto'>
        <table className='w-full table-auto bg-light shadow-lg rounded-md overflow-hidden'>
          <thead className='bg-grey-light text-primary uppercase text-sm'>
            <tr>
              <th className='py-4 px-6 text-left'>No</th>
              <th className='py-4 px-6 text-left'>Name</th>
              <th className='py-4 px-6 text-left'>Image</th>
              <th className='py-4 px-6 text-left'>Role</th>
              <th className='py-4 px-6 text-left'>Image</th>
              <th className='py-4 px-6 text-left'>Email</th>
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
                <td className='py-4 px-6'>Bob Smith</td>
                
                <td className='py-4 px-6'>Travel</td>
                <td className='py-4 px-6'>Writer</td>
                <td className='py-4 px-6'>
                  <img
                    className='h-10 w-10 rounded-full object-cover'
                    src='#'
                    alt="news image"
                  />
                </td>
                <td className='py-4 px-6'>bob@news.com</td>
                <td className='py-4 px-6'>
                  <div className='flex gap-3'>
                    <Link to='#' className='p-2 bg-grey-light-extra text-primary rounded-full hover:bg-primary-light'>
                      <IoEyeOutline />
                    </Link>
                    <Link to='#' className='p-2 bg-grey-light-extra tra text-primary rounded-full hover:bg-primary-light'>
                      <FiEdit2 />
                    </Link>
                    <Link to='#' className='p-2 bg-grey-light-extra tra text-primary rounded-full hover:bg-primary-light'>
                      <GoTrash />
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

export default Writers
0