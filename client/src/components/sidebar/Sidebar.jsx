import '../../styles/Sidebar.css'
import RandomButton from './RandomButton'
import Colors from './Colors'

const Sidebar = ({ swatches }) => {
  return (
    <div className="sidebar">
      <section className="sidebar-content">
        <RandomButton swatches={swatches} />
        <Colors />
      </section>
    </div>
  )
}

export default Sidebar