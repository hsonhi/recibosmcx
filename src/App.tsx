    // App.js
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Layout from './components/Layout'; // Your layout component
    import Home from './pages/Index'; // Your page components
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Privacy from './pages/Privacy';
    import Terms from './pages/Terms';

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}> {/* Parent route with Layout */}
              <Route index element={<Home />} /> {/* Default content for "/" */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }

    export default App;