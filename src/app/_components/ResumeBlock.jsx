import {Block, Line, Para} from '../exports';
export default function ResumeBlock({blockHeading, blockSubHeading, blockDescription, classes}){
    const classList = classes ? `resume-block ${classes}` : 'resume-block';
    return(
        <>
            <div className={classList}>
                <Block heading={blockHeading} para={blockSubHeading} classes="m-block-end-40" />
                <Line />
                <Para text={blockDescription} />
                <span className="blue_dot"></span>
            </div>
        </>
    );
}