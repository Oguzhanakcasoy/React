import React, {useContext} from 'react'
import { UserContext } from '../context/context'
import Component2 from './Component2'
 

export default function Component1() {
  const {user  } =   useContext(UserContext) 
  const date = Date()
  return (
    <div>
        <h3>Component-1</h3>
        <p>{date}</p>
        <p>Hello  {user} again</p>
        <Component2 />
    </div>
  )
}



// import React, { useContext, useState } from 'react'
// import { UserContext } from '../context/context'
// import Component2 from './Component2'

// export default function Component1() {
//     const {user }  = useState( useContext(UserContext))
//    // var user= useContext(UserContext)
//   return (
//     <div>
//         <h3>Component-1</h3>
//          <p>Hello {user}</p> 
//         <Component2/>
//     </div>
//   )
// }
