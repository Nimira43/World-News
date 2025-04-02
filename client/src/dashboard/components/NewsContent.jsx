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

        </table>
      </div>
    </div>
  )
}

export default NewsContent
