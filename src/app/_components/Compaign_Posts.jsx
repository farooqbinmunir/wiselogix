import Compaign_Post from "./Compaign_Post";
export default function Compaign_Posts({cls = ""}){
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            img: "assets/images/violence-against-women-on-step.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima."
        },{
            id: 2,
            title: "Lorem ipsum dolor",
            img: "assets/images/violence-against-women-on-step.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima."
        },{
            id: 3,
            title: "Lorem ipsum dolor",
            img: "assets/images/violence-against-women-on-step.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima."
        }
    ];
    return(
        <div className="fl-col-group fl-node-3u9sxohmr8vn fl-col-group-nested" data-node="3u9sxohmr8vn">
            {posts.map((post, index) => <Compaign_Post key={index} post={post} />)}
        </div>
    );
}