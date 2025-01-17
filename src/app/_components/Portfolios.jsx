'use client';
import { useQuery } from "@tanstack/react-query";
import {APIROUT, getData, Loading, NRSection, Portfolio} from '../exports';
export default function Portfolios(){
    let featureText = `Visit my portfolio and keep your feedback`;
    let headingText = `My Portfolio`;
    let portfolios = [];
    const getPortfoliosAPI = `${APIROUT}wp/v2/portfolios?acf_format=standard`;
    const {data, error, isLoading, isError, isFetched} = useQuery({
        queryKey: ['getPortfolios'],
        queryFn: () => getData(getPortfoliosAPI)
    });
    if(isLoading) return <Loading />;
    if(isError) return <h3>Error fetching PORTFOLIOs: {error.message}</h3>;
    if(isFetched){
        for(let i = 0; i < data.length; i++){
            const {id, slug, title: {rendered: stitle}, acf: {project_short_description: short_desc}, acf: {project_long_description: long_desc}, acf: {project_screenshot: imgUrl}, acf: {project_likes: likes} } = data[i];
            portfolios.push({
                id: id,
                slug: slug,
                title: stitle,
                short_desc: short_desc,
                long_desc: long_desc,
                img: imgUrl,
                likes: likes
            });
        }
    }
    return (
        <>
            <NRSection secFeatureTxt={featureText} secHeading={headingText} id={`portfolios`} titleTag={`h1`} center={true}>
                <div className="portfolio-boxes section-boxes">
                    <div className="portfolio-boxes-wrap section-boxes-wrap">
                        {portfolios.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio} />)}
                    </div>
                </div>
            </NRSection>
        </>
    );
}