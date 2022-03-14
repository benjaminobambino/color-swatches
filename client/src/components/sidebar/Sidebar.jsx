import '../../styles/Sidebar.css'
import RandomButton from './RandomButton'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-content">
        <RandomButton />
        <p>Red</p>
      </section>
    </div>
  )
}

export default Sidebar