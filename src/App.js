import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/footer';
import Dashboard from './component/contain';

function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
