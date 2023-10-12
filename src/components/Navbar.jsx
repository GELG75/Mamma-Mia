import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import { useContext } from 'react'
import PizzasContext from '../PizzasContext'
import { formatNumber } from '../helpers'

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'undefined')

  const { shoppingCart } = useContext(PizzasContext)
  const total = shoppingCart.reduce(
    (a, { count, price }) => a + price * count,
    0
  )

  return (
    <div className='navbar d-flex padding 2%'>
      <div>
        <NavLink className={setActiveClass} to='/'>
          <img
            src='https://yacenter.org/wp-content/uploads/2017/07/pizza-slice.png'
            width='40'
            height='40'
            className='d-inline-block align-top'
            alt=''
          />{' '}
          Pizzeria Mamma Mía!
        </NavLink>
      </div>
      <div className='shoppingCart'>
        <NavLink className={setActiveClass} to='/carrito'>
          <h4 className='mb-0'>
            {' '}
            &#128722; {''} $ {formatNumber(total)}
          </h4>
        </NavLink>
      </div>
    </div>
  )
}
