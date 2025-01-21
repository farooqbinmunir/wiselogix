import Header_Mobile from "./Header_Mobile";
import Header_Desktop from "./Header_Desktop";
export default function Header_MainRow() {
    return (
        <nav id="main-menu" aria-label="Site">
            <Header_Mobile />
            <Header_Desktop />
        </nav>
    );
}