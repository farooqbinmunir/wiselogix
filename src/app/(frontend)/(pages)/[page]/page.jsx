import { use } from "react";
export default function SinglePage({params}){
    const {page} =  use(params);
    return (
        <>
            <h1>Page: {page}</h1>
        </>
    );
}