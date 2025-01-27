import Image from 'next/image';
import Banner_Slider from "./Banner_Slider";

export default function Banner ({cls=""}) {

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
											<Banner_Slider cls="banner_slider_container" />
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