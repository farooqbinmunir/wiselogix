import {ContactForm, Author, NRSection} from '../exports';
export default function Contact(){
    let featureText = `Contact`;
    let headingText = `Contact With Me`;
    return(
        <>
            <NRSection id={`contact`} secFeatureTxt={featureText} secHeading={headingText} titleTag={`h1`} center={true}>
                <div className="contact-content">
                    <div className='contact-content-wrap'>
                        <div className="author-meta">
                            <Author />
                        </div>
                        <div className='contact-form'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </NRSection>
        </>
    );
}