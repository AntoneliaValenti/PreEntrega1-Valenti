import estilos from './CheckoutForm.module.css'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/clients'

const CheckoutForm = ({ onConfirm }) => {

  const [name, setName] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [orderId, setOrderId] = useState(null)

  const handleConfirm = async (event) => {
    event.preventDefault() 
    if (!name || !telefono || !email) {
        console.error('Por favor, complete todos los campos obligatorios.');
        return;
      }

    const userData = {
      name,
      telefono,
      email,
    }

    const orderCollection = collection(db, 'orden')
    try {
      const docRef = await addDoc(orderCollection, userData)

     onConfirm(userData)

    } catch (error) {
      console.error('Error al crear la orden:', error)
    }
  }

  return (
    <div className={estilos.Container}>
      <form onSubmit={handleConfirm} className={estilos.Form}>
        <label className={estilos.Label}>
          Nombre
          <input
            className={estilos.Input}
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className={estilos.Label}>
          Teléfono
          <input
            className={estilos.Input}
            type="text"
            value={telefono}
            onChange={({ target }) => setTelefono(target.value)}
          />
        </label>
        <label className={estilos.Label}>
          Email
          <input
            className={estilos.Input}
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className={estilos.Label}>
          <button type="submit" className={estilos.Button}>
            Crear Orden
          </button>
        </div>
      </form>

        {orderId && (
            <div>
            <p>La orden se creó con éxito. ID de la orden: {orderId}</p>
            
            </div>
            )
        }
      
    </div>
  )
}


  
export default CheckoutForm
