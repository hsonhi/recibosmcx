    // App.js
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Layout from './components/Layout'; // Your layout component
    import Home from './pages/Index'; // Your page components
    import About from './pages/AboutUs';
    import Contact from './pages/ContactUs';

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}> {/* Parent route with Layout */}
              <Route index element={<Home />} /> {/* Default content for "/" */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }

    export default App;