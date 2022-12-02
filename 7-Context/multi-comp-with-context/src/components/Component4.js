import React  from 'react'
import Component5 from './Component5'
 

export default function Component4() {
  const date = Date()
  return (
    
    <div>
        <h3>Component-4</h3>
        <p>{date}</p>
        <Component5 />
    </div>
  )
}

// import Component5 from "./Component5";

// export default function Component4() {
  
//   return (
//     <div>
//         <h3>Component-4</h3>
//         <Component5/>
//     </div>
//   )
// }
