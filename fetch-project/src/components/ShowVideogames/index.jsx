import { useState,useEffect } from 'react'

const ShowVideogames = () =>{
    const [counter,setCounter] = useState(0);
    
    const increaseCounter = () =>{
        setCounter(counter + 1)
    }

    useEffect(()=>{
        const fetchJsonFile = async () =>{
            const videogamesData = await fetch('http://localhost:3000/videogames');
            const json = await videogamesData.json()
            return json
        }
        fetchJsonFile()
        .catch(console.error)
    },[counter])

    
        
   

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={increaseCounter}>Increase the counter please!</button>
        </div>
    )
}

export default ShowVideogames