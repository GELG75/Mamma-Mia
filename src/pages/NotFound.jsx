import { Link } from 'react-router-dom'
import '../css/Notfound.css'

const NotFound = () => {

return (
        <div className='notFound text-center'>
            <h1 className='py-5'>404 - Pizza No Encontrada</h1>
            <div className='sad-pizza'>
                <img src='https://www.kemencespizzeria.hu/assets/img/sad-pizza.png' alt='404 pizza triste'/>
            </div>
            <Link to='/'>
                <button
                className='btn-primary'>
                    Volver
                </button>
            </Link>
        </div>
    )

}

export default NotFound