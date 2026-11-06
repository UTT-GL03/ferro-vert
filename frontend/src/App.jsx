import data from './assets/data/sample_data.json'
import TicketItem from './components/TicketItem'

function App() {

  return (
    <main>
      <h1>Ferro-Vert</h1>
      <ul className="tickets">
        {data.tickets.map((ticket, index) => (
          <TicketItem key={index} ticket={ticket} />
        ))}
      </ul>
    </main>
  )
}

export default App
