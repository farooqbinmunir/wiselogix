import Link from 'next/link';
import Image from 'next/image';

export default function Blog({params}){
    let page = '';
    const blogSlug = params.slug;
    return (
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="fl-content-full container">
                <div className="row">
                    <div className="fl-content col-md-12">
                        <div className="section_pad blog_banner_section">
                            <div className="banner_text_part">
                                <h1>Blog: [{blogSlug}]</h1>
                                <p>Real stories from the frontlines of ending the injustice of poverty for women and girls.</p>
                            </div>
                            <div className="banner_mata_part">
                                <div className="logo_part">
                                    <Image src='/assets/images/black-logo.png' alt="Ognwuche Foundation Logo - Black" width={100} height={60} />
                                </div>
                                <div className="reach_us_part">
                                    <h2>
                                        Media Inquiries
                                    </h2>
                                    <p>
                                        <strong>Akram Malik</strong><br />
                                        <Link href="mailto:info@gmail.com" className="mail-link">info@gmail.com</Link><br />
                                        <Link href="tel:"><span className="sr-only">Phone:&nbsp;</span>+123456789</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}