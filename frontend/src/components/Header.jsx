import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  
  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem('user'))

  const onLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('user_token') // Just in case
    navigate('/') // Send back to Landing Page
    window.location.reload() // Refresh to update UI
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>
        {user ? (
          // IF LOGGED IN: Show Logout Button
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          // IF NOT LOGGED IN: Show Login/Register
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header