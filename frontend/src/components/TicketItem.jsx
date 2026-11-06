import { Link } from "react-router";

import dayjs from 'dayjs'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import 'dayjs/locale/fr'

dayjs.locale('fr')
dayjs.extend(isTomorrow)

export default function TicketItem({ ticket }) {
  return (
    <div className="ticket">
      <h4>{ticket.trainStationDeparture} → {ticket.trainStationArrival}</h4>
      <p>Départ: {dayjs(ticket.scheduleDeparture).isTomorrow() ? 'Demain' : dayjs(ticket.scheduleDeparture).format('DD/MM/YYYY HH:mm')}</p>
      <p>Arrivée: {dayjs(ticket.scheduleArrival).format('DD/MM/YYYY HH:mm')}</p>
      <p>Prix: {ticket.price} €</p>
      <p>Durée: {ticket.duration} heures</p>
      <Link to={`/ticket/${ticket.id}`}>Voir le ticket</Link>
    </div>
  )
}