export default function Highlighted_Heading({headingTxt, textHighlight, cls=""}) {
    return (
        <h2 className={`${cls} hightlighted_heading fl-heading`}>
            <span className="hightlighted_heading_text fl-heading-text">{headingTxt}
                <span className="hightlited_span_text">{textHighlight}</span>
            </span>
        </h2>
    );
}