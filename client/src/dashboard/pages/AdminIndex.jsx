const AdminIndex = () => {
  return (
    <div className='mt-6'>
      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {[
          {title: 'World News', value: 173, color: 'text-green-theme'},
          {title: 'Pending', value: 63, color: 'text-blue-theme'},
          {title: 'Breaking News', value: 19, color: 'text-red-theme'},
          {title: 'National News', value: 48, color: 'text-purple-theme'},
          {title: 'Create News', value: 16, color: 'text-orange-theme'},
        ]}
      </div>
      
    </div>
  )
}

export default AdminIndex
