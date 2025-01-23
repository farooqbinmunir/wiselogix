export default function Banner_Tab_Button({index, title}) {
    let newIndex = index.toString().padStart(2, '0');;
    return (
        <button className="home-page-tab">
            <span className="home-page-tab-index">{newIndex}</span>
            <span className="home-page-tab-text">{title}</span>
        </button>
    );
}