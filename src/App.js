
import './App.css';
import CounterClick from './Component/CounterClick';
import HocComponent from './Component/HocComponent';
import CounterMouseover from './Component/CounterMouseover';

function App() {
  return (
    <div className="App">
     <h1> 
     HOC Component Exampl
     </h1>
     <CounterClick/>
     <CounterMouseover/>
     <HocComponent/>
    </div>
  );
}

export default App;
