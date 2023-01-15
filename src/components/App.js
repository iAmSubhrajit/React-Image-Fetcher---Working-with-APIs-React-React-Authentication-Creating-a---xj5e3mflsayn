import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [value, setValue] = useState();
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false);
    const handleInputValue = (e) => {
        setValue(e.target.value)
        if (value) {
            setLoader(true)
        }
        else {
            setLoader(false)
        }
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${value}`)
            .then((res) => {
                setTimeout(() => {
                    setData([res.data])
                    setLoader(false)
                });
            })
            .catch((error) => console.log(error))
    }, [value])
    return (
        <>
            Id number
            <input type='number' onChange={handleInputValue} />

            {loader ? <Loader /> : data.map((d) => (
                <PhotoFrame url={d.url} title={d.title} />
            ))}
        </>
    )
}


export default App;
