import Image from "next/image";
import Banner from "@/app/_components/Banner";
import Section_EndingPoverty from "@/app/_components/Section_EndingPoverty";
import Section_Contributers from "@/app/_components/Section_Contributers";
import Section_SupportNow from "@/app/_components/Section_SupportNow";
import Section_Events from "@/app/_components/Section_Events";
import Section_Projects from "@/app/_components/Section_Projects";
import Section_TerritoryAcknowledge from "@/app/_components/Section_TerritoryAcknowledge";
import Section_News from "@/app/_components/Section_News";
import Section_Joinus from "@/app/_components/Section_Joinus";
import Share_This_Page_Links from '@/app/_components/Share_This_Page_Links';

export default function Home() {
  return (
    <main id="fl-main-content" className="fl-page-content" itemProp="mainContentOfPage">


      	<div className="container">
        	<div className="row">
          		<div className="fl-content col-md-12">

            		<div className="article-element fl-post post-43648 page type-page status-publish has-post-thumbnail hentry" id="fl-post-43648" itemScope itemType="https://schema.org/BlogPosting">
			
              			<div className="fl-post-content clearfix" itemProp="text">
							<div className="fl-builder-content fl-builder-content-43648 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="43648">
								<Banner cls="banner_slider_component" />
								<Section_EndingPoverty cls="ending_poverty_component" />
								<Section_Contributers cls="contributers_component" />
								<Section_SupportNow cls="support_now_component" />
								<Section_Events cls="events_component" />
								<Section_Projects cls="compaigns_component" />
								<Section_TerritoryAcknowledge cls="territory_acknowledge_component" />
								<Section_News cls="news_component" />
								<Section_Joinus cls="joinus_component" />
							</div>
		              </div>
            		</div>
          		</div>
        	</div>
      	</div>
		
    </main>
  );
}
