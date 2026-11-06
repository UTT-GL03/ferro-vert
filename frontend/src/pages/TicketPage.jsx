import { Link, useParams } from 'react-router'

import data from '../assets/data/sample_data.json'

export default function TicketPage() {
  const { id } = useParams()
  const ticket = data.tickets.find(ticket => ticket.id === Number(id))

  return (
    <main>
      <h1>Billet n°{ticket.id}</h1>
      <article>
        <h2>{ticket.trainStationDeparture} → {ticket.trainStationArrival}</h2>
        <p>Type de train : {ticket.trainType}</p>
        <p>Départ : {ticket.scheduleDeparture}</p>
        <p>Arrivée : {ticket.scheduleArrival}</p>
        <p>Durée : {ticket.duration} heures</p>
        <p>Classe : {ticket.class}</p>
        <p>Prix : {ticket.price} €</p>
      </article>
      <Link to="/">Retour aux billets</Link>
    </main>
  )
}
