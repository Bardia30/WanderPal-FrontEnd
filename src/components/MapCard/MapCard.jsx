

const MapCard = ({ lat,lng, name, image, isOpen }) => {
  return (
    <div lat={lat} lng={lng} className="map-card">
        <img className="map-card__img" src={image} alt={name} />
        <p className="map-card__name">{name}</p>
        {isOpen ? 
            <p className="map-card__status--open">Open</p> :
            <p className="map-card__status--closed">Closed</p>
        }
    </div>
  )
}

export default MapCard