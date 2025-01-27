import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import {FindWithMe, BestSkills, getHomepage, getHomepageFeaturedImage} from '../exports';
import Banner_Slider from "./Banner_Slider";

export default function Banner ({cls=""}) {
    // let heroImage;
	// let slug = `home`;
	// const {data: home} = useQuery({
	// 	queryKey: ['getHomepage', slug], 
	// 	queryFn: getHomepage
	// });
	// let HP_featured_id = home?.[0].featured_media;
	// const {status, data} = useQuery({
	// 	queryKey: ['getHeroImage', HP_featured_id],
	// 	queryFn: getHomepageFeaturedImage,
	// 	enabled: !!HP_featured_id,
	// });

	// if(status == 'pending') return <h3>&#127744; Loading...</h3>;
	// if(status == 'success'){
    //     heroImage = data?.source_url;
    // }

	const bannerPosts = [
		{
			title: "Empower Women’s Rights",
			desc: "Your donation helps women access equality, justice, and opportunity.",
			image: "assets/images/Oxfam-InuruID-370859-Kenya-2024-05-29.jpg",
			credit: "Photo: wiselogix",
		},{
			title: "Support Women Today",
			desc: "Donate now to protect rights and build brighter futures for women.",
			image: "assets/images/Oxfam-InuruID-370859-Kenya-2024-05-29.jpg",
			credit: "Photo: wiselogix",
		},{
			title: "Stand for Women’s Rights",
			desc: "Your support drives change and empowers women globally.",
			image: "assets/images/Oxfam-InuruID-352913-Sierra-Leone-2023-01-09.jpg",
			credit: "Photo: wiselogix",
		}
	];

    return(
		<div id="section_banner" className={`fl-row fl-row-full-width fl-row-bg-none fl-node-glx1n7jzh8yv fl-row-default-height fl-row-align-top nopadding home-hero-row ${cls}`}>
			<div className="fl-row-content-wrap">
				<div className="fl-row-content fl-row-full-width fl-node-content">
					<div className="fl-col-group fl-node-9znbyoxjad8f" data-node="9znbyoxjad8f">
						<div className="fl-col fl-node-s8lh40ibfao9" data-node="s8lh40ibfao9">
							<div className="fl-col-content fl-node-content">
								<div className="fl-module fl-module-html fl-node-dn7gz1my980q"
								data-node="dn7gz1my980q">
									<div className="fl-module-content fl-node-content">
										<div className="fl-html">
											<Banner_Slider bannerPosts={bannerPosts} cls="banner_slider_container" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}