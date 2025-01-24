import NewsPost from "./NewsPost";
export default function Slider_News({cls="", style={}}) {
    const newsPosts = [
        {
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },{
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },{
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },{
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },{
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },{
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },{
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, omnis?',
            tags: 'Lorem, ipsum',
            date: '01 Jan, 2000',
        },
    ];
    return (
        <>
        <div id="slider_news_component" className={`${cls} slider_news_component fl-html`} style={style}>
            <div className="slider-header">
                <div className="slider-dot slider-dot-news"></div>
                <div className="slider-ctl slider-ctl-news"></div>
            </div>
            <div className='post-wedget carrousel carrousel-news'>
                {newsPosts.map((post, index) => <NewsPost key={index} post={post} />)}                
            </div>
        </div>
        </>
    )
}