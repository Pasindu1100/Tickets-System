import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Spinner from '../components/Spinner'
import TicketItem from '../components/TicketItem'
import { useNavigate } from 'react-router-dom'

function Tickets() {
  const [tickets, setTickets] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchTickets = async () => {
      // 1. Get the user from LocalStorage
      const user = JSON.parse(localStorage.getItem('user'))

      // If not logged in, kick them out
      if (!user) {
        navigate('/login')
        return
      }

      try {
        // 2. Prepare the Token for the Header
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }

        // 3. Request ONLY this user's tickets from Backend
        const response = await axios.get('/api/tickets', config)

        setTickets(response.data)
        setIsLoading(false)
      } catch (error) {
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message
        toast.error(message)
        setIsLoading(false)
      }
    }

    fetchTickets()
  }, [navigate])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>My Tickets</h1>
      </section>

      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div>Action</div>
        </div>

        {/* 4. Loop through tickets and show a TicketItem for each */}
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  )
}

export default Tickets