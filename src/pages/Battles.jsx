import {useState, useEffect} from 'react'
import axios from 'axios'

function Battles() {
    const [battleItems, setBattleItems] = useState([]);
    const [battleQuery, setBattleQuery] = useState('')

    const getBattleQuery = battleItems.filter(character => character.name.toLowerCase().includes(battleQuery.toLowerCase()))
  

  useEffect(() => {
    const fetchBattleItems = async() => {
      const result = await axios(`https://api.got.show/api/show/battles`)
      setBattleItems(result.data);
    }

    fetchBattleItems();
    
  }, [])
  return (
    <div className='battles'>
        <div className="hero-container">
            <form>
            <input 
            type='text' 
            placeholder="Search for battle"
            onChange={(e) => setBattleQuery(e.target.value)}/>
            </form>
        </div>
        <div style={{overflowX:'auto'}}>

        {getBattleQuery.length == 0 ? <h2>No battles found!</h2> :

            <table style={{width:'100%'}} >
                <tr>
                    <th style={{minWidth:'20%'}}>Name</th>
                    <th style={{minWidth:'20%'}}>Conflict</th>
                    <th>Faction 1</th>
                    <th>Faction 2</th>
                    <th>Location</th>
                </tr>
                {getBattleQuery.map((battle) => (
                    <tr>
                        <td >{battle.name}</td>
                        <td>{battle.conflict}</td>
                        <td>
                        {battle.factionsOne.map((factions) => (
                            <ul>
                                <li>{factions}</li>
                            </ul>
                            
                        ))}
                        </td>
                        <td>
                        {battle.factionsTwo.map((factions) => (
                            <ul>
                                <li>{factions}</li>
                            </ul>
                        ))}
                        </td>
                    
                        <td>{battle.place}</td>
                    </tr>
                
                ))}
            </table>
}
        </div>

    </div>
  )
}

export default Battles