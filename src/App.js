import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './Food/Components/Details'
import Home from './Food/Components/Home';
import Header from './Food/Components/Header';
import Footer from './Food/Components/Foot';
import Sidebar from './Dashboard/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import All from './Movie/components/All';
import Banner from './Movie/Banner';
import Register from './Dashboard/Register';
import './Dashboard/Login.css';
import Login from './Dashboard/Login';
import Service from './Dashboard/Service';
import Activity from './Movie/components/Activity'
import Billing from './Movie/components/Billing'
import Clients from './Movie/components/Clients';
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route className='page' path='/' element={<Register />} />
        <Route className='page' path='/login' element={<Login />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/service' element={<Service />} />
        <Route path='/food' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/movie' element={<All />} />
        <Route path='/movies' element={<Banner />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/clients' element={<Clients/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
