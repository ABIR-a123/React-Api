import React, { useEffect, useState } from 'react'
import './useeffect.css'

const UseEffect = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
    })
    return (
        <>
            <div className='body'>
                <h1> Learning UseEffect Hook</h1>
                <h1>Total User :{user.length}</h1>
          
                 {
                    user.map(user => <div>
                    <li>{user.name }</li>
                    </div> )
                 }   
            </div>
        </>
    )
}

export default UseEffect