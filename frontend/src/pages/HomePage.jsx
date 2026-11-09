import { useState, useEffect } from 'react'
import TicketItem from '../components/TicketItem'

export default function HomePage() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error('Erreur lors de la récupération des billets :', error))
  }, [])

  return (
    <main>
      <ul className="tickets">
        {tickets.tickets && tickets.tickets.map((ticket, index) => (
          <TicketItem key={index} ticket={ticket} />
        ))}
      </ul>
    </main>
  )
}