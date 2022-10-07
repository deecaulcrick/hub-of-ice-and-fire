import {useParams} from 'react-router-dom'

function HousesInfo({housesItems}) {

    const params = useParams()
    const getHouses= housesItems.filter(house => house._id.includes(params.id))

  return (
    <div className="info-container">
        {getHouses.map((item) => (
            <div className="main">
                <div className="main-image">
                    <img src={item.logoURL} alt='' style={{border: 'none'}}/>
                </div>
                <div className="main-text">
                    <h2>{item.name} <span><i>{item.words}</i></span></h2>
                    <h3>Sigil: <span><i>{item.sigil}</i></span></h3>
                    <h3>Seat: {item.seat.map((seat) => (<span>{seat}, </span>))}</h3>
                    <h3>Region: {item.region.map((region) => (<span>{region}, </span>))}</h3>
                    <h3>Allegiance: {item.allegiance.map((allegiance) => (<span>{allegiance}, </span>))}</h3>
                </div>
            </div>
        ))}
    </div>
  )
}

export default HousesInfo