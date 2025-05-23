const AdminIndex = () => {
  return (
    <div className='mt-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {[
          {title: 'Current News', value: 173, colour: 'text-blue-theme'},
          {title: 'Pending News', value: 63, colour: 'text-purple-theme'},
          {title: 'Edit News', value: 19, colour: 'text-orange-theme'},
          {title: 'Delete News', value: 48, colour: 'text-red-theme'},
          {title: 'Create News', value: 16, colour: 'text-green-theme'},
        ].map((start, i) => (
          <div
            key={i}
            className='p-8 bg-grey-light rounded-md shadow-md flex flex-col items-center gap-2' 
          >
            <span
              className={`text-4xl font-medium ${start.colour}`}
            >
              {start.value}
            </span>
            <span
              className='text-md font-normal text-grey-dark'
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
