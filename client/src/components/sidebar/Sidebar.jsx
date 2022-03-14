import '../../styles/Sidebar.css'
import RandomButton from './RandomButton'
import Colors from './Colors'

const Sidebar = ({ colors }) => {
  return (
    <div className="sidebar">
      <section className="sidebar-content">
        <RandomButton />
        <Colors colors={colors}/>
      </section>
    </div>
  )
}

export default Sidebar