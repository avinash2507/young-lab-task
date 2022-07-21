import logo from './logo.svg';
import './App.css';
import Navbar from './Landing_page/Navbar';
import Main_corousal from './Top_block/Main_corousal';
import ProductCard from './components/ProductCard/ProductCard';
import ProductLayout from './components/ProductLayout/ProductLayout';
import { GlobalProvider } from './reducer/globalContext';

function App() {
  return (
    <div className="App">
        <GlobalProvider> 
          <Navbar/>
    <Main_corousal/>
    <ProductLayout />
          </GlobalProvider> 
  
    </div>
  );
}

export default App;
