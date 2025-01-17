import Image from 'next/image';
import Contact_Image from '@/app/_assets/images/nr-contact-img.png';
import {FindWithMe, Para, Title, AuthorContact} from '../exports';
export default function Author(){
    
    return (
        <>
            <div className="author">
                <div className="author-wrap">
                    <div className="author-thumbnail">
                        <div className="author-thumbnail-wrap">
                            <Image className='author-contact-img' src={Contact_Image} alt='Contact Us' title='Contact Us' width="300" height="250" />
                        </div>
                    </div>
                    <div className="author-details">
                        <div className="author-details-wrap">
                            <Title title="Nayyer Raza" classes="author-name" headingTag='h1' />
                            <Para classes="author-desc" text="I am available for freelance work. Connect with me via and call in to my account" />
                            <AuthorContact />
                        </div>
                    </div>
                    <div className="author-social-links">
                        <div className="author-social-links-wrap">
                            <FindWithMe />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}