export default function Button({btnTxt, link = '', cls=""}) {
    return (
        <>
            {link && <a href={link} className={`fl-button standard_button ${cls}`}><span className={`fl-button-text`}>{btnTxt}</span></a>}
            {!link && <button className={`fl-button standard_button ${cls}`}><span className={`fl-button-text`}>{btnTxt}</span></button>}        
        </>
    );
}