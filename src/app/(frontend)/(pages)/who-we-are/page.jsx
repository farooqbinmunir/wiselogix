import Image from "next/image";
import BannerGlobal from "../../../_components/BannerGlobal";

export const metadata = {
    title: "Who we are",
  };
export default function Home() {
  return (
    <main id="fl-main-content" className="fl-page-content" itemProp="mainContentOfPage">
        <BannerGlobal pageSlug="who-we-are" />
    </main>
  );
}
