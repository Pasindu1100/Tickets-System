import { Link } from 'react-router-dom'
import { FaTicketAlt, FaQuestionCircle } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Welcome to the Support Desk</h1>
        <p>The professional way to track and manage your technical issues.</p>
      </section>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img 
          src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148889374.jpg?w=740" 
          alt="Support Team" 
          style={{ width: '100%', maxWidth: '500px', borderRadius: '15px', marginBottom: '30px' }} 
        />
      </div>

      <div className="landing-buttons" style={{ display: 'grid', gap: '20px' }}>
        <Link to='/login' className='btn btn-block'>
          <FaTicketAlt /> Login to Create Ticket
        </Link>
        
        <Link to='/register' className='btn btn-reverse btn-block'>
          <FaQuestionCircle /> New Here? Register
        </Link>
      </div>
    </>
  )
}

export default Home