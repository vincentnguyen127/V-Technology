
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core'
import theme from './ui/Theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<About />} />
          <Route path="/customsoftware" element={<Home />} />
          <Route path="/mobileapps" element={<Home />} />
          <Route path="/websites" element={<Home />} />
          <Route path="/revolution" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/estimate" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
