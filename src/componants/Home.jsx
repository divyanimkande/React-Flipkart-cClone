// import React from 'react'
// import React from './Header'
// import React from './Body'

// import { useNavigate } from 'react-router-dom'
// import Header from './Header'

// const Home = () => {
//   const router=useNavigate();
//   return (
//     // <div id="Home">
//       {/* <Header/> */}
//       {/* <Body/> */}
//      {/* <h1>Welcome home</h1> */}
//     {/* </div> */}
//     // <h1 className='heading'>welcome Home</h1><br/>
//     // <button className='btn' onClick={()->router("./products")}>Products</button>

//   )
// }

// export default Home;



import React,{useEffect , useState} from 'react'
// import React from 'react'
import Footer from './Footer'
import Header from './Header'
// import axios from 'axios'
// import Body from './Body'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const router = useNavigate();
  return (
    <div>
        <Header/>
        {/* <button onClick={()=>router("/Products")} >Click</button> */}
        {/* <Footer/> */}
        {/* <Body/> */}
    </div>

  )
}

export default Home