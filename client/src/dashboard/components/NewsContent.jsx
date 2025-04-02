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
    </div>
  )
}

export default NewsContent
