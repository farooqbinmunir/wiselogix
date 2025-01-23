import EndingPoverty_Header from "./EndingPoverty_Header";
import EndingPoverty_Posts from "./EndingPoverty_Posts";

export default function Section_EndingPoverty({cls = ""}) {

    return (
        <div id="section_ending_poverty" className={`${cls}`}>
            <EndingPoverty_Header />
            <EndingPoverty_Posts />
        </div>
    );
}