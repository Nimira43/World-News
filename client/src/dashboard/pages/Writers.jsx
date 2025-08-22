import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai"
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
              <th className='py-4 px-6 text-left'>Namee</th>
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
                    src='#'
                    alt="news image"
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
      <div className='flex justify-between items-center py-6'>
        <div className='flex items-center gap-4'>
          <label className='text-sm font-medium'>News Per Page</label>
          <select
            name="category"
            id="category"
            className='px-4 py-2 rounded-md border border-grey-medium focus:border-grey-dark'
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className='flex items-center gap-4 text-sm text-grey-dark'>
          <span>5 of 15</span>
          <div className='flex gap-2'>
            <AiOutlineCaretLeft className='w-6 h-6 text-grey-dark cursor-pointer hover:text-primary'/>
            <AiOutlineCaretRight className='w-6 h-6 text-grey-dark cursor-pointer hover:text-primary'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Writers
0