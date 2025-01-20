'use client';
import { useQuery } from "@tanstack/react-query";
import {APIROUT, getData, Page} from '@/app/exports';

export default function SinglePage({params}){
    const pageSlug = params.page;
    const API = `${APIROUT}wp/v2/pages?slug=${pageSlug}`;
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['getPage'], 
        queryFn: () => getData(API)
    });
    if(isPending) return <h3>&#127744; Loading...</h3>;
    if(isError) return <h3>Error fetching page: {error.message}</h3>;
    return (
        <>
            {
                data.length ? data.map(p => <Page key={p.id} page={p} />) : <div className="page-not-found-error-box"><h1>Page not found</h1><small>Requested page: {pageSlug} <br /> does not exist.</small></div>
            }
        </>
    );
}