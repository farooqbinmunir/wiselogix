import Banner_Post from "./Banner_Post";
import Banner_Tab_Button from "./Banner_Tab_Button";
export default function Banner_Slider({bannerPosts, cls=""}) {
    return (
        <div className={`home-page-hero-box ${cls}`}>
            <div className="home-page-sider">
                {bannerPosts.map((post, index) => <Banner_Post post={post} index={index} key={index} />)}
            </div>
            <div className="home-page-tabs-container">
                <div className="home-page-tabs">
                    {bannerPosts.map((post, index) => <Banner_Tab_Button index={++index} title={post.title} key={index} />)}
                </div>
            </div>
            <div className="slider-header">
                <div className="slider-dot slider-dot-two-column"></div>
                <div className="slider-ctl slider-ctl-two-column"></div>
            </div>
        </div>
    );
}