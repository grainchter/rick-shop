import './App.css';
import Header from './components/header/Header';
import HeaderBanner from './components/header/HeaderBaner/HeaderBanner';
import Catalog from './components/main/catalog';


function App() {
  return (
    <div className="App">
      <Header />
      <HeaderBanner />
      <Catalog />
    </div>
  );
}

export default App;

