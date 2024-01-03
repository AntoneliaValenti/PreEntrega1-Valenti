import estilos from './CheckOut.module.css'
import { useContext, useState } from 'react';
import { writeBatch, Timestamp, collection, getDocs, query, where, documentId, addDoc } from 'firebase/firestore';
import { CartContext } from '../../Context/CartContex';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { db } from '../../firebase/clients'; 

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder  = async (name, phone, email) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
           // console.log(productsAddedFromFirestore)
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity 
            
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
                 
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Algunos productos están fuera de stock:')
            }

        } catch (error) {
            console.error('Error al crear la orden:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if (orderId) {
        return <h1>El ID de su orden es: {orderId}</h1>
    }

    return (
        <div >
            <h1>TERMINAR COMPRA!</h1>
            <CheckoutForm className={estilos.term} onConfirm={createOrder} />
        </div>
    )
}

export default CheckOut








