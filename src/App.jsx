import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import View from './Pages/View'
import Edit from './Pages/Edit'
function App() {
 
 const [addBookStatus, setBookStatus] = useState([{}])
  

  return (
    <>
      <Header setBookStatus={setBookStatus} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/View' element={<View addBookStatus={addBookStatus}  />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
