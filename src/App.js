import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className='text-6xl'>Welcome to my WebSite</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;