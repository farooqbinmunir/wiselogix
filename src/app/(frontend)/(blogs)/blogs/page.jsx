import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Blogs - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function ContactUs(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="fl-content-full container">
                <div className="row">
                    <div className="fl-content col-md-12">
                        <div className="section_pad blog_banner_section">
                            <div className="banner_text_part">
                                <h1>
                                    Press and Media Room
                                </h1>
                                <p>
                                    Real stories from the frontlines of ending the injustice of poverty for women and girls.
                                </p>
                            </div>
                            <div className="banner_mata_part">
                                <div className="logo_part">
                                    <Image width={'100'} height={`100`} src="assets/images/black-logo.png" alt="Black Logo" />
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
                        <div className="section_pad blogs_section">
                            <div className="blogs_item_wrap">
                                <div className="blogs_item">
                                    <div className="blogs_meta">
                                        <div className="blog_link">
                                            <Link href="#" rel="tag" className="press-release">Press Release</Link>
                                        </div>
                                        <div className="blog_date">January 15, 2025</div>
                                    </div>
                                    <div className="blogs_title">
                                        <h3>
                                            <Link href="#">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="blogs_item">
                                    <div className="blogs_meta">
                                        <div className="blog_link">
                                            <Link href="#" rel="tag" className="press-release">Press Release</Link>
                                        </div>
                                        <div className="blog_date">January 15, 2025</div>
                                    </div>
                                    <div className="blogs_title">
                                        <h3>
                                            <Link href="#">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="blogs_item">
                                    <div className="blogs_meta">
                                        <div className="blog_link">
                                            <Link href="#" rel="tag" className="press-release">Press Release</Link>
                                        </div>
                                        <div className="blog_date">January 15, 2025</div>
                                    </div>
                                    <div className="blogs_title">
                                        <h3>
                                            <Link href="#">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="blogs_item">
                                    <div className="blogs_meta">
                                        <div className="blog_link">
                                            <Link href="#" rel="tag" className="press-release">Press Release</Link>
                                        </div>
                                        <div className="blog_date">January 15, 2025</div>
                                    </div>
                                    <div className="blogs_title">
                                        <h3>
                                            <Link href="#">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="blogs_item">
                                    <div className="blogs_meta">
                                        <div className="blog_link">
                                            <Link href="#" rel="tag" className="press-release">Press Release</Link>
                                        </div>
                                        <div className="blog_date">January 15, 2025</div>
                                    </div>
                                    <div className="blogs_title">
                                        <h3>
                                            <Link href="#">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="blogs_item">
                                    <div className="blogs_meta">
                                        <div className="blog_link">
                                            <Link href="#" rel="tag" className="press-release">Press Release</Link>
                                        </div>
                                        <div className="blog_date">January 15, 2025</div>
                                    </div>
                                    <div className="blogs_title">
                                        <h3>
                                            <Link href="#">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="show_blogs_btn">
                                <button>Load More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}