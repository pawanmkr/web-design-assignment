import './App.css'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'
import Detail from './components/Detail/Detail'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Gallery />
      <Detail />
    </div>
  )
}

export default App
