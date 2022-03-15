import '../../styles/Sidebar.css'
import RandomButton from './RandomButton'
import Colors from './Colors'

const Sidebar = ({ colors, swatches }) => {
  return (
    <div className="sidebar">
      <section className="sidebar-content">
        <RandomButton swatches={swatches} />
        <Colors colors={colors} />
      </section>
    </div>
  )
}

export default Sidebar