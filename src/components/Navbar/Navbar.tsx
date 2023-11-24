import './styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left-menu">
          <ul className='items'>
            <li className='left-item'>Categories</li>
            <li className='left-item'>Activities Near Me</li>
            <li className='left-item'>Add a Place</li>
          </ul>
        </div>
        <div className="right-menu">
          <ul className='items'>
            <li>Start Exploring {`->`}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar