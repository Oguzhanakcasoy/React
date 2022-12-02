// import Component4 from "./Component4";

// export default function Component3() {
   
//   return (
//     <div>
//         <h3>Component-3</h3>
//         <Component4/>
//     </div>
//   )
// }

import React from 'react'
import Component4 from './Component4'
 

export default function Component3() {
  const date = Date() 
  return (
    <div>
        <h3>Component-3</h3>
        <p>{date}</p>
       <Component4 />
    </div>
  )
}
