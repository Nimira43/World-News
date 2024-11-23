import Sidebar from './Sidebar'
import Header from './Header'

const MainLayout = () => {
  return (
    <div className>
      <Sidebar />
      <div>
        <Header />
      </div>
      <h1>MainLayout Page</h1>
    </div>
  )
}

export default MainLayout
