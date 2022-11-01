import {Link} from 'react-dom'
import './index.css'

const EventItem = props => {
  const {eventItemDetails} = props
  const {imageUrl, name, location, registrationStatus} = eventItemDetails

  return (
    <Link to="/active" className="link-status">
      <li className="event-list-item-card">
        <img alt="event" className="event-image" src={imageUrl} />
        <h1 className="event-name">{name}</h1>
        <p className="event-location">{location}</p>
      </li>
    </Link>
  )
}

export default EventItem
