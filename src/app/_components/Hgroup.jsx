export default function Hgroup({headingTxt, paraTxt, textHighlight = '', cls="", textAlign = 'left', style={}}) {
    return (
        <hgroup className = {`${cls} standard_hgroup`} style={{...style, textAlign: textAlign}}>
            <h2 className={`hightlighted_heading fl-heading standard_hgroup_heading`}>
                <span className="hightlighted_heading_text fl-heading-text">
                    {headingTxt}
                    {textHighlight && <span className="hightlited_span_text">{textHighlight}</span>}
                </span>
            </h2>
            <p className="standard_hgroup_para">{paraTxt}</p>
        </hgroup>
    );   
}