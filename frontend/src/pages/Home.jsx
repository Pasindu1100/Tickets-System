import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUser } from 'react-icons/fa'

function Home() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <section className='heading'>
        <h1>Welcome to the Support Desk</h1>
        <p>The professional way to track and manage your technical issues.</p>
      </section>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148889374.jpg?w=740" 
          alt="Support Team" 
          style={{ width: '100%', maxWidth: '500px', borderRadius: '15px' }} 
        />
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        {user ? (
          // IF LOGGED IN: Show "Go to Dashboard"
          <Link to='/dashboard' className='btn btn-block'>
            Go To Dashboard
          </Link>
        ) : (
          // IF NOT LOGGED IN: Show Login/Register
          <>
            <Link to='/login' className='btn btn-block'>
              <FaSignInAlt /> Login
            </Link>
            <Link to='/register' className='btn btn-reverse btn-block'>
              <FaUser /> Register
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default Home