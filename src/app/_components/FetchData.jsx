'use client';
import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
        .get("https://wordpress-821607-5011314.cloudwaysapps.com/wp-json/wp/v2/menu-items")
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

    return (
        <div>
        <h1>Axios GET Request</h1>
        {data ? <p>{console.log(data)}</p> : <p>Loading...</p>}
        </div>
    );
};

export default FetchData;