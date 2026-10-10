import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Program from './Pages/Program';
import Gallery from './Pages/Gallery';
import Team from './Pages/Team';
import ContactUs from './Pages/ContactUs';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
