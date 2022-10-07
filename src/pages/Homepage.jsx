import { useState, useEffect } from 'react'
import axios from 'axios';

function Homepage() {
    const [quote, setQuote] = useState([]);
    const [randomQuote, setRandomQuote] = useState({
      sentence: "When you play the game of thrones, you win or you die. There is no middle ground.",
      character: {
        name: "Cersei Lannister",
        slug: "cersei",
        house: {
          name: "House Lannister of Casterly Rock",
          slug: "lannister"
            }
      }
    
    })

    
    // fetch random quote
    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * quote.length);
       setRandomQuote(quote[randomNumber])
    }
    useEffect(() => {
        const fetchQuote = async() => {
          const result = await axios(`https://api.gameofthronesquotes.xyz/v1/random/83`)
          setQuote(result.data);
        }
     
        fetchQuote();
        
      }, [])
  return (
    <div className='homepage'>
        <h1>"{randomQuote.sentence}"</h1>
        <h3>- {randomQuote.character.name}<br/>
       {randomQuote.character.house.name === null ? '' : <span>({randomQuote.character.house.name})</span>}</h3>

        <div className="button-links">
            <button onClick={handleClick}>Get Random Quote</button>
        </div>
    </div>
  )
}

export default Homepage