import { useContext } from 'react'
import PizzasContext from '../PizzasContext'
import { formatNumber } from '../helpers'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Details.css'

const DetallePedido = () => {
  const { shoppingCart, increment, decrement } = useContext(PizzasContext)
  const total = shoppingCart.reduce(
    (a, { count, price }) => a + price * count,
    0
  )

  useEffect(() => {
  }, [shoppingCart])

  return (
    <>
      <div className='shoppingCart p-5'>
        <div className='bg-light w-75 m-auto p-5'>
          <h5>Detalles del pedido: </h5>
          <div className='p3 bg-white'>
            {shoppingCart.map((product, i) => (
              <div key={i} className='d-flex justify-content-between py-2'>
                <div className='d-flex justify-content-between aling-items-center'>
                  <img src={product.img} style={{ width: 50 }} alt='' />
                  <h6 className='mb-0 text-capitalize p-2'>{product.name}</h6>
                </div>

                <div className='d-flex justify-content-end align-items-center'>
                  <h6 className='mb-0 p-2 text-success'>
                    ${formatNumber(product.price * product.count)}
                  </h6>
                  <button
                    className='btn btn-danger'
                    onClick={() => decrement(i)}
                  >-</button>
                  <b className='mx-2'>{product.count}</b>
                  <button
                    className='btn btn-primary'
                    onClick={() => increment(i)}
                  >+</button>
                </div>
              </div>
            ))}
            <h2 className='my-4'>Total: ${formatNumber(total)}</h2>
            <button className='btn btn-success btn-cart'>Ir a Pagar</button>
            <div>
              <Link to='/'>
                <button className='btn btn-primary btn-cart'>Volver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetallePedido
