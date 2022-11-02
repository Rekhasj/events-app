import './index.css'

const EventItem = props => {
  const {eventItemDetails, activeEventId} = props
  const {imageUrl, name, location, id} = eventItemDetails

  const onClickEvent = () => {
    activeEventId(id)
  }

  return (
    <li className="event-list-item-card">
      <button className="event-button" type="button" onClick={onClickEvent}>
        <img alt="event" className="event-image" src={imageUrl} />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
