import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Homepage from './pages/Homepage';
import CharacterGrid from './components/CharacterGrid';
import Houses from './pages/Houses';
import Battles from './pages/Battles';
import CharacterInfo from './pages/CharacterInfo';
import HousesInfo from './pages/HousesInfo';
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [characterItems, setCharacterItems] = useState([]);
  const [housesItems, setHousesItems] = useState([]);
  
//get characters
  useEffect(() => {
    const fetchCharacterItems = async() => {
      const result = await axios(`https://api.got.show/api/show/characters`)
      setCharacterItems(result.data);
    }

    fetchCharacterItems();
    
  }, [])

  //get houses
  useEffect(() => {
    const fetchHousesItems = async() => {
      const result = await axios(`https://api.got.show/api/show/houses`)
      setHousesItems(result.data);
    }

    fetchHousesItems();
    
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Homepage />}/>
            <Route path='/characters' 
            element={<CharacterGrid characterItems={characterItems}/>}>  
            </Route>
            <Route path='/houses' element={<Houses housesItems={housesItems}/>}/>
            <Route path='/battles' element={<Battles />}/>
            <Route path='/characters/:id' element={<CharacterInfo characterItems={characterItems}/>} />
            <Route path='/houses/:id' element={<HousesInfo housesItems={housesItems}/>} />
          </Routes>
          
        </div>
        <Footer />
      </div>
      
    </Router>
      
      
  );
}

export default App;
