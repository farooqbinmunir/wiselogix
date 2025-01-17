import {Container} from '../exports';
export default function Page({page}){
    const content = {__html: page.content.rendered};
    return(
        <>
            <Container id="page" classes={`page-${page.slug}`} dataPageId={page.id}>
                <div className="page_title">
                    <h1 className="page_title_heading">{page.title.rendered}</h1>
                </div>
                <div className="page_content">
                    <div className="page_content_wrap" dangerouslySetInnerHTML={content}></div>
                </div>
            </Container>
        </>
    );
}