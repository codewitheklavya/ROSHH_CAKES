import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Cakes from './pages/Cakes';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Order from './pages/Order';
import RawImages from './pages/RawImages';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-bg flex flex-col font-body selection:bg-secondary selection:text-accent">
          <Navbar />
          <main className="flex-grow pt-[72px] md:pt-[80px]">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cakes" element={<Cakes />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/order" element={<Order />} />
                <Route path="/raw-images" element={<RawImages />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <WhatsAppFloat />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#FFFFFF',
                color: '#2D2D2D',
                border: '1px solid #FFE8EF',
                borderRadius: '16px',
                padding: '12px 24px',
              },
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
