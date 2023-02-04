import React from 'react'
import React from './Header'
import React from './Body'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const router=useNavigate();

  return (
    <div>
     <h1>Welcome home</h1>
    </div>
    
    <button className='btn' onClick={()->router("./products")}>Products</button>

  )
}

export default Home