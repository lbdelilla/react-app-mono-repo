import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import Home from './views/Home.jsx'
import { Route, Routes } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not found!</h1>} />
        {/* ... etc. */}
      </Routes>
      <Footer />
    </>
  )
}

export default Layout
