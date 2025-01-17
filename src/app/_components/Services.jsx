'use client';
import { useQuery } from "@tanstack/react-query";
import {APIROUT, getData, Loading, Service, NRSection} from '../exports';
export default function Services(){
    let featureText = `Features`;
    let headingText = `What I Do`;
    let services = [];
    const getServicesAPI = `${APIROUT}wp/v2/services?acf_format=standard`;
    const {data, error, isLoading, isError, isFetched} = useQuery({
        queryKey: ['getServices'],
        queryFn: () => getData(getServicesAPI)
    });
    if(isLoading) return <Loading />;
    if(isError) return <h3>Error fetching SERVICES, {error.message}</h3>;
    if(isFetched){
        for(let i = 0; i < data.length; i++){
            const {id, slug, title: {rendered: stitle}, acf: {service_main_description: desc}, acf: {service_icon: imgUrl} } = data[i];
            services.push({
                id: id,
                slug: slug,
                title: stitle,
                description: desc,
                img: imgUrl
            });
        }
    }
    return (
        <>
            <NRSection id={`services`} secFeatureTxt={featureText} secHeading={headingText} titleTag={`h1`}>
                <div className="service-boxes">
                    <div className="service-boxes-wrap section-boxes-wrap">
                        {services.map(service => <Service key={service.id} service={service} />)}
                    </div>
                </div>
            </NRSection>
        </>
    );
}