import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="site-wrapper">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
