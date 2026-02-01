import { Link } from 'react-router-dom'

function TicketItem({ ticket }) {
  return (
    <div className='ticket'>
      {/* Date */}
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      
      {/* Product Name */}
      <div>{ticket.product}</div>
      
      {/* Status Badge */}
      <div className={`status status-${ticket.status}`}>
        {ticket.status}
      </div>
      
      {/* View Button -> Goes to Detail Page */}
      <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default TicketItem