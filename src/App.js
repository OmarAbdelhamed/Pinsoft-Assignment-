import './App.css';
import Home from './components/Home';
import My_Data from "./products-list.json"
import { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [Products, setProducts] = useState(My_Data);

  return (
    <div className='container'>
      <Home Products={Products}/>
    </div>
  );
}

export default App;
