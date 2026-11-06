import data from '../assets/data/sample_data.json'
import TicketItem from '../components/TicketItem'

export default function HomePage() {
  return (
    <main>
      <ul className="tickets">
        {data.tickets.map((ticket, index) => (
          <TicketItem key={index} ticket={ticket} />
        ))}
      </ul>
    </main>
  )
}