import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Dashboard() {
  const navigate = useNavigate()
  
  // Get User Data
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    // If not logged in, force them back to Login page
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <section className='heading'>
        <h1>Welcome, {user && user.name}</h1>
        <p>Support Dashboard</p>
      </section>

      <div className="dashboard-grid" style={{ display: 'grid', gap: '20px' }}>
        {/* Button 1: Create Ticket */}
        <Link to='/new-ticket' className='btn btn-reverse btn-block'>
          <FaQuestionCircle /> Create New Ticket
        </Link>

        {/* Button 2: View Tickets */}
        <Link to='/tickets' className='btn btn-block'>
          <FaTicketAlt /> View My Tickets
        </Link>
      </div>
    </>
  )
}

export default Dashboard