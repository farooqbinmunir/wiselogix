export default function Block({heading, para, headingTag= "h2", classes}){
    let classList = classes ? `text-block ${classes}` : 'text-block';
    return(
        <>
            <div className={`${classList}`}>
                <div className="text-block-heading">
                    {headingTag == 'h1' && <h1 className="text-block-heading-text">{heading}</h1>}
                    {headingTag == 'h2' && <h2 className="text-block-heading-text">{heading}</h2>}
                    {headingTag == 'h3' && <h3 className="text-block-heading-text">{heading}</h3>}
                    {headingTag == 'h4' && <h4 className="text-block-heading-text">{heading}</h4>}
                    {headingTag == 'h5' && <h5 className="text-block-heading-text">{heading}</h5>}
                    {headingTag == 'h6' && <h6 className="text-block-heading-text">{heading}</h6>}
                </div>
                <div className="text-block-paragraph">
                    <p className="text-block-paragraph-text">{para}</p>
                </div>
            </div>
        </>
    );
}