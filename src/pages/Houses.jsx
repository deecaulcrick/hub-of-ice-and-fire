import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import axios from 'axios'

function Houses({housesItems}) {

  
  const [housesQuery, setHousesQuery] = useState('');

  const getHousesQuery = housesItems.filter(house => house.name.toLowerCase().includes(housesQuery.toLowerCase()))

  return (
    <div className="houses">
      <div className="hero-container">
        <form>
          <input 
          type='text' 
          placeholder="Search for house"
          onChange={(e) => setHousesQuery(e.target.value)}/>
        </form>
      </div>
      
      <div className="characterGrid">
      
        {getHousesQuery.length == 0 ? <h2>No houses found!</h2> : (getHousesQuery.map((house) => (
          <div className="characterItem" key={house._id}>
              <div className="house-card" >
                <Link to={`/houses/${house._id}`}><img src={house.logoURL} alt=''/></Link>
                <h5 >{house.name}</h5>
            </div>
          </div> 
          
        )))}
      
      </div>
    </div>
  )
}

export default Houses