import { useState } from 'react' // Import Hook to manage state (data)
import { useNavigate } from 'react-router-dom' // Import Hook to switch pages
import { toast } from 'react-toastify' // Import Hook for pop-up messages
import { FaUser } from 'react-icons/fa' // Import Icon
import axios from 'axios' // Import Axios to talk to Backend

function Register() {
  // 1. STATE: This holds the form data while the user types
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // Destructure fields so we can use them easily
  const { name, email, password, confirmPassword } = formData

  const navigate = useNavigate()

  // 2. ON CHANGE: Updates the state whenever you type in a box
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // 3. ON SUBMIT: What happens when you click the button
  const onSubmit = async (e) => {
    e.preventDefault() // Stop page from reloading

    // Validation
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      try {
        // CALL THE BACKEND (The Proxy handles the http://localhost:5000 part)
        const response = await axios.post('/api/users', userData)

        if (response.data) {
          // Save the user data (including Token) to LocalStorage
          localStorage.setItem('user', JSON.stringify(response.data))
          toast.success('Registration Successful!')
          navigate('/dashboard') // Send user to Home Page
        }
      } catch (error) {
        // If error, show the message from the backend
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message
        toast.error(message)
      }
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange} // Calls function when you type
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register