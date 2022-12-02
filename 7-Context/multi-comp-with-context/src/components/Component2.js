// import Component3 from "./Component3";

// export default function Component2() {
    
//   return (
//     <div>
//         <h3>Component-2</h3>
//         <Component3/>
//     </div>
//   )
// }


import Component3 from "./Component3";

 
 

export default function Component2() {
  const date = Date()  
  return (
    <div>
        <h3>Component-2</h3>
        <p>{date}</p>
         <Component3 />
    </div>
  )
}
