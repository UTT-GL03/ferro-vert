export default function TicketItem({ ticket }) {
  return (
    <div className="ticket">
      <h4>{ticket.trainStationDeparture} → {ticket.trainStationArrival}</h4>
      <p>Type: {ticket.trainType}</p>
      <p>{ticket.scheduleDeparture} : {ticket.scheduleArrival}</p>
      <p>Arrivée: {ticket.scheduleArrival}</p>
      <p>Classe: {ticket.class}</p>
      <p>Prix: {ticket.price} €</p>
      <p>Durée: {ticket.duration} heures</p>
    </div>
  )
}