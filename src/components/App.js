import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [userId, setUserId] = useState();
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const handleUserId = (e) => {
        setUserId(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${userId}`)
            .then((res) => {
                setIsLoading(true)
                setData([res.data])
                
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            })
            .catch((error) => console.log(error))


    }, [userId])

    return (
        <>
            <span>Id number </span>
            <input type='number' onChange={handleUserId} />
            {isLoading ? <Loader /> : (data.map((d) => (
                <PhotoFrame url={d.url} title={d.title} />
            )))}
        </>
    )
}


export default App;
