import React, { useState, useEffect  } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // a snippet of code which runs based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/** container -> posters */}

        </div>
    )
}

export default Row