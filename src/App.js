import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './Components/Details'
import Home from './Components/Home';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Foot';
function App() {
  return (
    <Router>
      <center>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </Container>
        <Footer />
      </center>

    </Router>
  );
}

export default App;
