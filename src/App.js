import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/shared/Header';
import Category from './pages/Category';
import Footer from './components/footer/Footer';
import Single from './pages/Single';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Category' element={<Category />} />
            <Route exact path='/Single' element={<Single />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
