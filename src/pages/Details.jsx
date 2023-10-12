import { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import PizzasContext from '../PizzasContext'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import '../css/Details.css'


const Details = () => {
  const [pizza, setPizza] = useState(null)
  const { pizzas, addToCart } = useContext(PizzasContext)
  const { id } = useParams()

  useEffect(() => {
    const getPizza = async () => {
      const result = pizzas.filter((obj) => obj.id === id)
      setPizza(result)
    }
    getPizza()
  }, [pizzas, id])

  return (
    <>
       <Container className='mt-5'>
       <div className='back'>
                <Link to='/'>
                  <button
                    className='btn-back btn-primary'>
                    Volver
                  </button>
                </Link>
              </div>
      {pizza ? (
        
        <div className='card-pizza mb-8'>
          <div className='row-pizza no-gutters'>
            <div key={pizza[0].id} className='pizza-nombre'>
              <div className='card-imagen col-md-4'>
                <img className='card-img' src={pizza[0].img} alt={pizza.name} />
              </div>
              <div className='card-bodypizza  col-md-6 '>
                <h4 className='card-titlepizza text-capitalize'>
                  {pizza[0].name}
                </h4>
                <hr />
                <p className='text-align-center'>{pizza[0].desc}</p>

                <p className='card-text'>
                  <b>Ingredientes:</b>
                </p>

                <ul variant='flush'>
                  {pizza[0].ingredients.map((ingredient, i) => (
                    <li className='border-0 text-capitalize' key={i}>
                      🍕
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='card-footerpizza'>
                <div>
                  <h3 className='text-pizza'>Precio $ {pizza[0].price}</h3>
                </div>
                <div>
                  <button
                    className='btn-pizza btn-danger'
                    onClick={() => addToCart(pizza[0])}
                  >
                    Añadir 🛒
                  </button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      ) : null}
      </Container>
    </>
  )
}

export default Details
