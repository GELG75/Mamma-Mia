import { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PizzasContext from '../PizzasContext'
import '../css/Card.css'

const Card = () => {
  const { pizzas, addToCart } = useContext(PizzasContext)
  const navigate = useNavigate()

  return (
    <>
      <div className='row'>
        {pizzas?.map((pizza) => (
          <div key={pizza.id} className='col-3 mt-3'>
            <div className='card'>
              <img className='card-img-top' src={pizza.img} alt={pizza.name} />
              <div className='card-body'>
                <h4 className='card-title text-capitalize'>
                  {pizza.name}
                </h4>
                <hr />
                <p className='card-text'>
                  <b>Ingredientes:</b>
                </p>

                <ListGroup variant='flush'>
                  {pizza.ingredients.map((ingredient, i) => (
                    <ListGroup.Item
                      className='border-0 text-capitalize'
                      key={i}
                    >
                      🍕
                      {ingredient}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className='card-footer text-muted py-3'>
                <h4 className='text-center pt-2 '>$ {pizza.price}</h4>
                <div className='card-btn'>
                  <button
                    className='btn btn-primary'
                    variant='dark'
                    onClick={() => navigate(`/pizza/${pizza.id}`)}
                  >
                    Ver Más 👀
                  </button>
                  <button
                    className='btn btn-danger'
                    variant='danger'
                    onClick={() => addToCart(pizza)}
                  >
                    Añadir 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
