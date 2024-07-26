
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core'
import theme from './ui/Theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './ui/Footer';
import { useState } from 'react';
import LandingPage from './LandngPage';


function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function Services() {
  return <h1>Services</h1>;
}

function CustomerServices() {
  return <h1>Services</h1>;
}

function MobileApps() {
  return <h1>Services</h1>;
}

function Websites() {
  return <h1>Websites</h1>;
}

function Revolution() {
  return <h1>Revolution</h1>;
}

function App() {
  const [tabValue, setTabValue] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header tabValue={tabValue} setTabValue={setTabValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/customsoftware" element={<CustomerServices />} />
            <Route path="/mobileapps" element={<MobileApps />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/revolution" element={<Revolution />} />
            <Route path="/about" element={<About />} />
            <Route path="/estimate" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer tabValue={tabValue} setTabValue={setTabValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
