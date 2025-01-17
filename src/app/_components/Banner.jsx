'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import {FindWithMe, BestSkills, getHomepage, getHomepageFeaturedImage} from '../exports';

export default function Banner (){
    let heroImage;
	let slug = `home`;
	const {data: home} = useQuery({
		queryKey: ['getHomepage', slug], 
		queryFn: getHomepage
	});
	let HP_featured_id = home?.[0].featured_media;
	const {status, data} = useQuery({
		queryKey: ['getHeroImage', HP_featured_id],
		queryFn: getHomepageFeaturedImage,
		enabled: !!HP_featured_id,
	});

	if(status == 'pending') return <h3>&#127744; Loading...</h3>;
	if(status == 'success'){
        heroImage = data?.source_url;
    }

    return(
        <>
            <div className="banner_section">
					<div className="banner_inner d-flex">

						<div className="banner_inner_left w-60">
							<div className="banner_inner_left_wrap">
								<div className="welcome_text">
									<span className="welcome_text_content uppercase">Welcome to my world</span>
								</div>
								<div className="hero_text">
									<h2 className="hero_text_heading">Hi, I’m&nbsp;
										<span className="blue_text">Nayyer Raza</span><br className="hero_name_break" />
										<span className="hero_name_broken_text">a&nbsp;</span>
										<span className="effectfull_text">Developer.</span>
									</h2>
									<div className="effectfull_text_templates d-none">
										<span className="effectfull_text_template">Developer.</span>
										<span className="effectfull_text_template">UI/UX Designer.</span>
										<span className="effectfull_text_template">Professional Coder.</span>
									</div>
								</div>
								<div className="hero_description">
									<p className="hero_description_text">I provide you with an innovative, attractive and professional web design & development services that will assist you to open new markets for your business.</p>
								</div>
								<div className="banner_links">
									<div className="banner_links_inner d-flex">
										<FindWithMe />
										<BestSkills />
									</div>
								</div>
							</div>
						</div>
						<div className="banner_inner_right w-40">
							<div className="banner_inner_right_wrap">
								<div className="banner_hero_img_container">
									<div className="img_wrap">
										<Image src={heroImage} height="500" width="500" style={{width: '100%', height: '100%'}} alt="Nayyer Raza" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </>
    );
}