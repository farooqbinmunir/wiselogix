import HR_Post from "./HR_Post";
export default function HR_Posts({cls = ""}){
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
            img: "assets/images/DSC_9594-1-1024x683.jpg",
            terms: "Lorem ipsum dolor sit."
        },{
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
            img: "assets/images/DSC_9594-1-1024x683.jpg",
            terms: "Lorem ipsum dolor sit."
        },{
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
            img: "assets/images/DSC_9594-1-1024x683.jpg",
            terms: "Lorem ipsum dolor sit."
        },{
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
            img: "assets/images/DSC_9594-1-1024x683.jpg",
            terms: "Lorem ipsum dolor sit."
        },{
            id: 5,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
            img: "assets/images/DSC_9594-1-1024x683.jpg",
            terms: "Lorem ipsum dolor sit."
        },{
            id: 6,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, veritatis!",
            img: "assets/images/DSC_9594-1-1024x683.jpg",
            terms: "Lorem ipsum dolor sit."
        }
    ];
    return(
        <div className="fl-module fl-module-html fl-node-91in6bdw2yhc" data-node="91in6bdw2yhc">
            <div className="fl-module-content fl-node-content">
                <div className="fl-html">
                    <div className='posts stories'>
                        {posts.map((post, index) => <HR_Post key={index} post={post} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}