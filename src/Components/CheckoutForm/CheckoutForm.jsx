import estilos from './CheckoutForm.module.css'
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        EventTarget.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <div className={estilos.Container}>
            <form onSubmit={handleConfirm} className={estilos.Form}>
                <label className={estilos.Label}>
                    Nombre
                    <input
                    className={estilos.Input}
                    type="texto"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className={estilos.Label}>
                    Telefono
                    <input
                    className={estilos.Input}
                    type="texto"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
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
                    <button type='submit' className={estilos.Button}>Crear Orden</button>
                </div>
            </form>

        </div>
    )
}



export default CheckoutForm