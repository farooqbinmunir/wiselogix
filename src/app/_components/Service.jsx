import Image from "next/image";
import {Title, Para} from '@/app/exports';
import Link from "next/link";
export default function Service ({service}){
    const {id, title, img, slug, description} = service;
    return (
        <>
            <Link  id={id} className={`service-box section-box service-box${id}`} href={`https://wiselogix.com/service/${slug}/`} target="_blank">
                <div className="service-box-inner">
                    <div className="service-box-wrap">
                        <div className="service-icon">
                            <Image src={img} className="service-icon-img" title={title} alt={title} width="50" height="50" />
                        </div>
                        <Title title={title} classes="service-title" headingTag="h2" />
                        <Para text={description} classes="service-excerpt" />
                    </div>
                    <div className="service-arrow-btn">
                        <Image className="service-arrow-img" src={'#'} alt="Read More" title="Read More" height="20" width="20" />
                    </div>
                </div>
            </Link>
        </>
    );
}