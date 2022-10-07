import CharacterItem from './CharacterItem'
import { useState } from 'react'

function CharacterGrid({ characterItems }) {

  const [query, setQuery] = useState('');

  const getQuery = characterItems.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="characterContainer">
      <div className="hero">
      <div className="hero-container">
        <form>
          <input 
          type='text' 
          placeholder="Search for character"
          onChange={(e) => setQuery(e.target.value)}/>
        </form>
      </div>
       
    </div>
      <div className="characterGrid">
      
      {getQuery.length == 0 ? <h2>No characters found!</h2> : (getQuery.map((character) => (
        <CharacterItem key ={character._id}character={character}/>
      )))}
      
      </div>
      
    </div>
    
  )
}

export default CharacterGrid