import Link from 'next/link';
import BannerGlobal from "../../../_components/BannerGlobal";



export const metadata = {
    title: "Contact Us - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function ContactUs(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <BannerGlobal pageSlug="contact-us" />
                    <div className="section_pad under_banner_section">
                        <div className="section_heading">
                            <h2>
                                How To Reach Us
                            </h2>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Mauris sed tellus venenatis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                        </div>
                    </div>
                    <div className="section_pad contact_form_section">
                        <div className="contact_form">
                            <h2>
                                Contact Us
                            </h2>
                            <iframe height="650" width="100%" src="https://wordpress-821607-5011314.cloudwaysapps.com/contact-form/" frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="section_pad contact_info_section">
                        <div className="contact_info address_part">
                            <h4>Mailing Address</h4>
                            <strong>Lorem ipsum</strong>
                            <p>Guatemala</p>
                            <Link href="#" target="_blank">
                                See Map
                                <span className="sr-only">Opens in a new window</span>
                                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="contact_info phone_part">
                            <h4>Contact Us By Phone</h4>
                            <p>
                                <strong>Tel:</strong> +123-456-789 <br />
                                <strong>Toll-Free:</strong> 1-800-GO-LORAM or <br /> 123-456-789<br />
                                <strong>Fax:</strong> +123-456-789 <br />
                            </p>
                        </div>
                        <div className="contact_info email_part">
                            <h4>Contact Us By Email</h4>
                            <p>
                                <strong>General Inquiries</strong> <br /> info@gmail.com<br />
                                <strong>Donor inquiries</strong> <br /> info@gmail.com<br />
                            </p>
                        </div>
                        <div className="contact_info media_requests">
                            <h4>Media Requests</h4>
                            <p>
                                Akram Malik <br />
                                External Affairs <br />
                                Specialist & Media Person <br />
                                123-456-789 <br />
                                info@gmail.com <br />	
                            </p>
                        </div>
                    </div>
                    <div className="section_pad Confidentially_section">
                        <h2>
                            Lorem ipsum dolor sit amet
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                            Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                            Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                        </p>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}