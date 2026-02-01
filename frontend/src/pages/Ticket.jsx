import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'react-router-dom' // Gets the ID from URL
import Spinner from '../components/Spinner'

function Ticket() {
  const [ticket, setTicket] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const { ticketId } = useParams() // Matches the route path

  useEffect(() => {
    const fetchTicket = async () => {
      const user = JSON.parse(localStorage.getItem('user'))

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }

        // Call the new Backend Route
        const response = await axios.get(`/api/tickets/${ticketId}`, config)

        setTicket(response.data)
        setIsLoading(false)
      } catch (error) {
        toast.error(error.message)
        setIsLoading(false)
      }
    }

    fetchTicket()
  }, [ticketId])

  if (isLoading) return <Spinner />

  // === ADD THIS SAFETY CHECK ===
  if (!ticket) {
    return <h3>Something went wrong. Ticket not found.</h3>
  }
  // =============================

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  )
}

export default Ticket