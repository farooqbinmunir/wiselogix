export default function Container({id, classes, children, dataPageId = null}){
    return(
        <>
            <div id={id} className={classes && classes} data-page_id={dataPageId && dataPageId}>
                <div className="container">
                    <div className={`${id}-wrap`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}