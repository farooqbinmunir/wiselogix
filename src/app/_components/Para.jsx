export default function Para({text, classes}){
    return(
        <>
            <div className={classes ? `${classes} para-wrapper`: `para-wrapper`}>
                <p className="para-text">{text}</p>
            </div>
        </>
    );
}