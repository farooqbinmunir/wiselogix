import Link from 'next/link';
export default function Button({btnTxt, link = '', cls="", style={}, align="left", fullWidth=false}) {
    let alignCss = {};
    let buttonCss = {
        textAlign: "center", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "white"
    };
    if(align === "center") {
        alignCss = {display: "flex", justifyContent: "center", alignItems: "center"};
    }else{
        alignCss = {display: "inline-block"};
    }
    if(fullWidth) {
        alignCss = {display: "block", width: "100%"};

        buttonCss = {
            ...buttonCss,
            width: "100%"
        };
    }
    buttonCss = {
        ...buttonCss,
        ...style
    };

    return (
        <>
            {link && <div className="button_wrapper" style={alignCss}><Link href={link} className={`standard_button ${cls}`} style={buttonCss}><span className={`fl-button-text`} style={{color: "white"}}>{btnTxt}</span></Link></div>}
            {!link && <div className="button_wrapper" style={alignCss}><button className={`standard_button ${cls}`} style={buttonCss}><span className={`fl-button-text`} style={{color: "white"}}>{btnTxt}</span></button></div>}        
        </>
    );
}