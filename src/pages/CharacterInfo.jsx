import {useParams} from 'react-router-dom'

function CharacterInfo({characterItems}) {
    const params = useParams()
    const getCharacter= characterItems.filter(character => character.slug.includes(params.id))
    
  return (
    <div className='info-container'>
        {getCharacter.map((item) => (
            <div className='main'>
                <div className='main-image'>
                    { item.alive ? '' : ( <h4 className='dead'>R.I.P</h4>)}
                    <img src={item.image} />
                </div>
                <div className='main-text'>
                    <h2>{item.name}<span>  ({item.house})</span></h2>
                    {/* <h3>Titles:</h3>
                    {(item.titles).map((title)=> (
                       <p>{title}</p>
                    ))} */}
                    <div className="span-text">
                        <h3>Gender: <span>{item.gender}</span></h3>
                        <h3>Age: <span>{item.age.age} years old</span></h3>
                        <h3>Status: <span>{ item.alive ? 'Alive' : 'Dead'}</span></h3>
                        <h3>Origin:{item.origin.map((origin) => (<span>{origin}, </span>))}</h3>
                        <h3>Allegiances: {item.allegiances.map((allegiance) => (<span>{allegiance}, </span>))}</h3>
                        <h3>Father: <span>{item.father}</span></h3>
                        <h3>First Appearance: <span>"{item.first_seen}"</span></h3>
                        <h3>Actor: <span>{item.actor}</span></h3>
                    </div>
                    
                </div>
            
            
            </div>
            
        ))}
    </div>
  )
}

export default CharacterInfo