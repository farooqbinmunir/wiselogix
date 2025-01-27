import { useQuery } from "@tanstack/react-query";
import {KEY, Loading, getData} from '../exports';
import { useState, useEffect } from "react";
export default function useDoubleQuery(){
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [ids, setIds] = useState([]);
    const result = [];
    const argument = {
        firstApi: 'http://localhost/nayyerraza/wp/wp-json/wp/v2/services',
        requiredField: 'acf.service_icon',
        key: 'getServices2'
    };
    const {firstApi, requiredField, key} = argument;
    useEffect( () => {
        const ids = [];
        setIsLoading(true);
        fetch(firstApi)
        .then(r => r.json())
        .then(services => {
            services.map(service => {
                const {acf: {service_icon: imgId}} = service;
                ids.push(imgId);
            });
            setIds(ids);
        });
    }, [firstApi, images, isLoading]);
    if(isLoading) return <h3>Loading......</h3>;
    console.log(ids, 'ids');
    
    // const {data: services} = useQuery({
    //     queryKey: [key],
    //     queryFn: () => getData(firstApi)
    // });
    // const {data, error, isLoading, isError, isFetched} = useQuery({
    //     queryKey: [`${key}_2`],
    //     queryFn: () => {
    //         const imgUrls = [];
    //         services.map(s => {
    //             const imgData = getData(`http://localhost/nayyerraza/wp/wp-json/wp/v2/media/${s.acf.service_icon}`);
    //             imgUrls.push(imgData.source_url);
    //         });
    //         return imgUrls;
    //     }
    // });

    // if(isLoading) return <Loading />;
    // if(isError) return <h3>Error fetching Services in dbl query {error.message}</h3>;
    // if(isFetched){
    //     console.log(data, 'dblquery source url');
    // }

}