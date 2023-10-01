import './App.css'
import HelloWorld from './HelloWorld'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' />
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
