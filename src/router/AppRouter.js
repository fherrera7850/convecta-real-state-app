import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetails from '../views/PropertyDetails';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

