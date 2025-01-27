import Banner_Post from "./Banner_Post";
import Banner_Tab_Button from "./Banner_Tab_Button";
import client from '../../../config.js';

export default async function Banner_Slider({cls=""}) {
    const bannerSliderQuery = `query bannerSlider {
        sliders {
            edges {
                node {
                    title
                    uri
                    content(format: RAW)
                    homeSlider {
                        bannerImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }
    }`;
    const {sliders: {edges: bannerPosts}} = await client.request(bannerSliderQuery);
    return (
        <div className={`home-page-hero-box ${cls}`}>
            <div className="home-page-sider">
                {bannerPosts.map((post, index) => <Banner_Post post={post.node} key={index} />)}
            </div>
            <div className="home-page-tabs-container">
                <div className="home-page-tabs">
                    {bannerPosts.map((post, index) => <Banner_Tab_Button index={++index} title={post.node.title} key={index} />)}
                </div>
            </div>
            <div className="slider-header">
                <div className="slider-dot slider-dot-two-column"></div>
                <div className="slider-ctl slider-ctl-two-column"></div>
            </div>
        </div>
    );
}