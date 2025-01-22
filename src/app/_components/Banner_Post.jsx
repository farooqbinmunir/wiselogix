import Donate_Button from "./Donate_Button";
export default function Banner_Post({post, index}) {
  return (
    <div className="home-page-slide" style={{
        backgroundImage: `url(${post.image})`,
        backgroundPosition: "center",
        }} key={index}>
        <div className="home-page-slide-container">
            <div className="home-page-slide-info">
                <div className="home-page-slide-box">
                    <h1 className="home-page-slide-title">{post.title}</h1>
                    <p className="home-page-slide-text">{post.desc}</p>
                    <Donate_Button theme="green" desktop="all" />
                    {/* <a className="home-page-slide-button" href="#">Donate Now</a> */}
                </div>
                <div className="home-page-slide-credit">
                    <span className="white">{post.credit}</span>
                </div>
            </div>
        </div>
    </div>
  );
}