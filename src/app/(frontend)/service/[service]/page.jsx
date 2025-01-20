'use client';
import {Container, APIROUT, getData, Loading, Title} from '@/app/exports';
import {useQuery} from '@tanstack/react-query';
export default function Service({params}){
    let page = '';
    const service = params.service;
    const serviceAPI = `${APIROUT}wp/v2/services?slug=${service}`;
    const {data, error, isError, isLoading, isFetched} = useQuery({
        queryKey: ['getService'],
        queryFn: () => getData(serviceAPI)
    });
    if(isLoading) return <Loading />;
    if(isError) return <h3>Error fetching SERVICE: {error.message}</h3>;
    if(isFetched) {
        page = data[0];
    }

    return(
        <>
            <Container id="page">
                <Title title={page.title.rendered} main="true" />
                {
                    page.acf.top_description && 
                    <div className='top_description'>
                        <p className='top_description_text'>{page.acf.top_description}</p>
                    </div>
                }
                {
                    <div className='service-main'>
                        <h2 className='service-main-heading'>{page.acf.service_main_heading}</h2>
                        <p className='service-main-heading'>{page.acf.service_main_description}</p>
                        <div className='service-features'>
                            <div className='service-feature feature-1'>
                                <Title title={page.acf.service_features.service_feature_1.service_feature_heading} />
                                <p>{page.acf.service_features.service_feature_1.service_feature_description}</p>
                            </div>
                            <div className='service-feature feature-2'>
                                <Title title={page.acf.service_features.service_feature_2.service_feature_heading} />
                                <p>{page.acf.service_features.service_feature_2.service_feature_description}</p>
                            </div>
                            <div className='service-feature feature-3'>
                                <Title title={page.acf.service_features.service_feature_3.service_feature_heading} />
                                <p>{page.acf.service_features.service_feature_3.service_feature_description}</p>
                            </div>
                            <div className='service-feature feature-4'>
                                <Title title={page.acf.service_features.service_feature_4.service_feature_heading} />
                                <p>{page.acf.service_features.service_feature_4.service_feature_description}</p>
                            </div>
                            <div className='service-feature feature-5'>
                                <Title title={page.acf.service_features.service_feature_5.service_feature_heading} />
                                <p>{page.acf.service_features.service_feature_5.service_feature_description}</p>
                            </div>
                        </div>
                    </div>
                }
            </Container>
        </>
    );
}