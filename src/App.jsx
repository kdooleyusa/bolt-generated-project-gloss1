import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import Glossary from './pages/Glossary';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import TermDetails from './pages/TermDetails';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/term/:termId" element={<TermDetails />} />
          </Routes>
          <Footer />
        </div>
      );
    }

    export default App;
