import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Products, Services } from "./pages"
import { Layout } from './utils/Layout'
import './styles/theme.scss'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <Router>
      <Helmet>
        <title>Kuzey Tekel İzmir 24 saat açık tekel bayi</title>
        <meta
          name="description"
          content="Kuzey Tekel, İzmir Bornova'da 24 saat hizmet veren tekel bayi. Geniş ürün yelpazesi ve paket servis hizmeti ile sizlere hizmet vermekten gurur duyarız."
        />
        <meta
          name="keywords"
          content="Kuzey Tekel, tekel bayi, Bornova, İzmir, 24 saat açık, paket servis, alkol, bira, viski, vodka, rakı, şarap"
        />
      </Helmet>
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
