import logo from './logo.svg';
import Header from './Components/Header';
import Balance from './Components/Balance';
import Income from './Components/Income';
import './commenStyle.css'
import TransectionList from './Components/TransectionList';
import AddTransection from './Components/AddTransection';
import GlobelProvider from './Components/GlobelState';

function App() {
  return (
    <GlobelProvider >
    
    <div className='pdiv' >
    
    <Balance />
    <Income />
    <TransectionList />
    <AddTransection />
    <GlobelProvider />
    </div>
    </GlobelProvider>
  );
}


export default App;
