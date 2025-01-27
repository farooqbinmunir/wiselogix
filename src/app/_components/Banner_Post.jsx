import Link from "next/link";
import Donate_Button from "./Donate_Button";
export default function Banner_Post({post}) {
  return (
    <div className="home-page-slide" style={{
            backgroundImage: `url(${post.homeSlider.bannerImage.node.sourceUrl})`,
            backgroundPosition: "center",
        }}>
        <div className="home-page-slide-container">
            <div className="home-page-slide-info">
                <div className="home-page-slide-box">
                    <h1 className="home-page-slide-title"><Link href={post.uri}>{post.title}</Link></h1>
                    <p className="home-page-slide-text">{post.content}</p>
                    <Donate_Button theme="green" desktop="all" cls="home-page-slide-button" />
                </div>
                <div className="home-page-slide-credit">
                    <span className="white">Photo: Wiselogix</span>
                </div>
            </div>
        </div>
    </div>
  );
}