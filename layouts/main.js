import Nav from '../components/nav'
import Meta from '../components/meta'
import Footer from '../components/footer'

export default ({ children }) => (
  <div>
    <Meta />
    <Nav />
    { children }
    <Footer />
  </div>
)