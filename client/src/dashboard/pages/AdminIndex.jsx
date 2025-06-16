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
      
    </div>
  )
}

export default AdminIndex
