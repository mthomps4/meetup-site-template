import Footer from '../sections/footer';
import Meta from '../sections/meta';
import Nav from '../sections/nav';

export default ({ children }) => (
  <div>
    <Meta />
    <Nav />
    {children}
    <Footer />
  </div>
);
