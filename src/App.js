import logo from './y_logo512.png';
import './App.css';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" height={400}/>
        <ComingSoon/>
      
    </div>
  );
}

export default App;
