import Link from 'next/link';
export default function GetInvolved({cls = '', style={}}) {
    return (
        <div className={`${cls} section_pad get_involved_section`} style={style}>
            <div className="section_heading">
                <h2>Other Ways To Get Involved</h2>
            </div>
            <div className="involved_icon_section_wrap">
                <div className="involved_icon_item">
                    <div className="involved_icon">
                        <i className="icon-oxfam-icon-heart-2" aria-hidden="true"></i>
                    </div>
                    <div className="involved_text">
                        <Link href="#">Volunteer</Link>
                    </div>
                </div>
                <div className="involved_icon_item">
                    <div className="involved_icon">
                        <i className="icon-oxfam-icon-lightbulb" aria-hidden="true"></i>
                    </div>
                    <div className="involved_text">
                        <Link href="#">Fundraise For Oxfam</Link>
                    </div>
                </div>
                <div className="involved_icon_item">
                    <div className="involved_icon">
                        <i className="icon-oxfam-icon-dollar-circle" aria-hidden="true"></i>
                    </div>
                    <div className="involved_text">
                        <Link href="#">Donate</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}