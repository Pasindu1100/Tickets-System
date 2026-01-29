import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function NewTicket() {
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')
  
  const navigate = useNavigate()

  // Get user from localstorage to check if logged in
  const user = JSON.parse(localStorage.getItem('user'))

  const onSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
        toast.error('You must be logged in')
        return
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`, // ATTACH THE TOKEN HERE
        },
      }

      await axios.post('/api/tickets', { product, description }, config)
      
      toast.success('Ticket Created!')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket