import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Products, Services } from "./pages"
import { Layout } from './utils/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
