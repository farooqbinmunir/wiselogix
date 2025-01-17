export default function Title({title, classes, headingTag= 'h3'}){
    return(
        <>
            <div className="title">

                {headingTag === 'h1' && <h1 className={classes ? `title ${classes}` : 'title-heading'}>{title}</h1>}
                {headingTag === 'h2' && <h2 className={classes ? `title ${classes}` : 'title-heading'}>{title}</h2>}
                {headingTag === 'h3' && <h3 className={classes ? `title ${classes}` : 'title-heading'}>{title}</h3>}
                {headingTag === 'h4' && <h4 className={classes ? `title ${classes}` : 'title-heading'}>{title}</h4>}
                {headingTag === 'h5' && <h5 className={classes ? `title ${classes}` : 'title-heading'}>{title}</h5>}
                {headingTag === 'h6' && <h6 className={classes ? `title ${classes}` : 'title-heading'}>{title}</h6>}                
            </div>
        </>
    );
}