export default function Photo_Credit({text = 'Lorem, ipsum dolor.', cls=""}) {
    return (
        <div className="fl-module fl-module-rich-text fl-node-cvwrs37i2ta0 fl-visible-desktop fl-visible-large hero_credit maxwidth900">
            <div className="fl-module-content fl-node-content">
                <div className="fl-rich-text">
                    <p>Photo: {text}</p>
                </div>
            </div>
        </div>
    );
}