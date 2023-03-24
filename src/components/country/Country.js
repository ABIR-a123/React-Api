 import React, { useEffect, useState } from 'react'
 import './country.css'
 
 const Country = () => {
    const [country,setCountry]=useState([])

   useEffect (()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response =>response.json())
    .then(data=> setCountry(data))

   })

   return (
     <>
     <div className='heading'>
     <h1>TOTAL COUNTRY:{country.length}</h1>
     </div>
        
     </>
   )
 }
 
 export default Country