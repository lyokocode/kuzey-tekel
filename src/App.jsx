import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Product } from "./pages"
import { Layout } from './utils/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
