'use client';
import Link from 'next/link';
import Image from 'next/image';
import right_arrow_icon from '@/app/_assets/images/arrow-right.png';
import like_icon from '@/app/_assets/images/like-icon.png';
import liked_icon from '@/app/_assets/images/liked-icon.png';
import { Title} from '../exports';
import { useState } from 'react';
export default function Portfolio({portfolio}){
    const {id, title, img, slug, short_desc, long_desc, likes} = portfolio;
    const [imageSrc, setImageSrc] = useState(like_icon);
    const url = `https://www.nayyerraza.com/projects/${slug}/`;
    const galleryLink = `https://www.nayyerraza.com/projects-cat/gallery/`;
    
    function mouseEnter(e){
        setImageSrc(liked_icon);
    }
    function mouseLeave(e){
        setImageSrc(like_icon);
    }
    return(
        <>
            <div  id={id} className={`portfolio-box portfolio portfolio-box-${id} section-box`}>
                <div className="inner">
                    <div className="inner-wrap section-box-wrap">
                        <div className='inner-img'>
                            <div className="inner-img-wrap">
                                <Image className='inner-img-element' src={img} title={title} alt={title} height="300" width="300" style={{width: '100%'}} />
                            </div>
                        </div>
                        <div className="inner-meta mt-20">
                            <div className="inner-meta-gallery-link">
                                <Link href={galleryLink}>Gallery</Link>
                            </div>
                            <div className="inner-meta-likes">
                                <Image className='like-icon-img' src={imageSrc} alt='Like' width="20" height="20" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                                <span className="project-likes-count">{likes}</span>
                            </div>
                        </div>
                        <div className="inner-title mt-20">
                            <Link className='project-title-link' href={url}><Title title={title} headingTag="h2" /> <Image className="portfolio-arrow-right-img" src={right_arrow_icon} alt="Read More" title="Read More" height="20" width="20" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}