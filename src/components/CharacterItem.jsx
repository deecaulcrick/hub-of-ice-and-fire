import {Link} from 'react-router-dom'

function CharacterItem({ character }) {
  
  return (
    <div className="characterItem">
      <div className="character-card">
     <Link to={`/characters/${character.slug}`}><img src={character.image} alt='' /></Link>
        { character.alive ? '' : ( <h4>R.I.P</h4>)}
        <p>{character.name}</p>
      </div>
    </div>
  )
}

export default CharacterItem