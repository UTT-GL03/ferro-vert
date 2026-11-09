import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'

export default function TicketPage() {
  const [ticket, setTicket] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch('/sample_data.json')
      .then(response => response.json())
      .then(data => {
        const foundTicket = data.tickets.find(t => t.id === parseInt(id))
        setTicket(foundTicket)
      })
      .catch(error => console.error('Erreur lors de la récupération du billet :', error))
  }, [id])

  return (
    <main>
      {
        !ticket ? (
          <p>Chargement du billet...</p>
        ) : (
          <>
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
          </>
        )
      }
    </main>
  )
}
