import './App.css';
import  Homecontainers from '../src/Containers/Homecontainer'
import Headercontainer from './Containers/Headercontainer';
function App() {
  return (
    <div className="App">
      <Headercontainer/>
      <Homecontainers/>
    </div>
  );
}

export default App;
