import Link from 'next/link';
import Image from 'next/image';
import GACParternshipColourLogo from '../../../../../../public/assets/images/GAC-parternship-colour-logo.webp';
import Donate_Button from "../../../../_components/Donate_Button";
import client from "../../../../../../config.js";
export default async function Project({params}){
    let page = '';
    const {slug: projectSlug} = await params;

    const singleProjectQuery = `{
        ourProject(id: "${projectSlug}", idType: SLUG) {
            databaseId
            title
            excerpt(format: RAW)
            featuredImage {
                node {
                    sourceUrl
                }
            }
            projectCategories {
                nodes {
                    name
                    slug
                    taxonomyName
                }
            }
            projectContent {
                sectionIntroduction {
                    introDescription
                    introMainHeading
                    introSubheading
                }
                sectionGlance {
                    glanceSectionDescription
                    glanceSectionHeading
                    box1Glance {
                        box1GlanceHeading
                        box1GlanceTextDetails
                    }
                    glanceBox2 {
                        glanceBox2NumberHeading
                        glanceBox2TextDetails
                    }
                    glanceBox3 {
                        glanceBox3NumberHeading
                        glanceBox3TextDetails
                    }
                }
                sectionWhatWeDoing {
                    doingMainHeading
                    doingColumn1 {
                        doingCol1Description
                        doingCol1Heading
                        doingCol1Image {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    doingColumn2 {
                        doingCol2Description
                        doingCol2Heading
                        doingCol2Image {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    doingColumn3 {
                        doingCol3Description
                        doingCol3Heading
                        doingCol3Image {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
                sectionAchieve {
                    achieveMainHeading
                    achieveTextContent
                }            
                sectionProjectPartners {
                    projectPartner {
                        partnerCountryName
                        partnerBranch {
                            partnerBranchCode
                            partnerBranchTitle
                            partnerBranchWebsiteUrl
                        }
                    }
                    projectPartnerMainHeading
                }
                sectionDonationBanner {
                    donationBannerBgImage {
                        node {
                            sourceUrl
                        }
                    }
                    donationBannerDescription
                    donationBannerHeading
                }
            }
            projectSidebar {
                sidebarProjectLocation
                sidebarProjectDuration
                sidebarProjectSupporters {
                    supporterDescription
                    supporterLogo {
                        node {
                            sourceUrl
                        }
                    }
                    supporterButton {
                        supporterButtonLink
                        supporterButtonText
                    }
                }
                sidebarProjectPartners {
                    sidebarProjectPartner
                }
            }
        }
    }`;
    const {ourProject} = await client.request(singleProjectQuery);
    // console.log(ourProject?.projectContent?.sectionWhatWeDoing?.doingMainHeading);
    return (
        <>
        <main id="fl-main-content" className="fl-page-content" data-id={ourProject?.databaseId} data-projectSlug={ourProject?.slug}>
            <div className="container">
                <div className="row">
                    <div className="section_pad banner_section" style={ourProject?.featuredImage?.node ? {backgroundImage: `url(${ourProject?.featuredImage?.node?.sourceUrl})`} : ''}>
                        <div className="section_heading">
                            <span className="project_category">{ourProject?.projectCategories?.nodes[0]?.name}</span>
                            <h1>{ourProject?.title}</h1>
                            <p>{ourProject?.excerpt}</p>
                        </div>
                        <div className="banner_button">
                            <div className="project_readmore">
                                <Donate_Button />
                            </div>
                        </div>
                    </div>
                    <div className="section_pad intro_section under_banner_section">
                        <div className="section_heading">
                            <h2>{ourProject?.projectContent?.sectionIntroduction?.introMainHeading}</h2>
                        </div>
                        <div className="project_info">
                            <div className="project_desc">
                                <h3>{ourProject?.projectContent?.sectionIntroduction?.introSubheading}</h3>
                                <div
                                    className="project_detailed_text"
                                    dangerouslySetInnerHTML={{
                                        __html: `${ourProject?.projectContent?.sectionIntroduction?.introDescription}`
                                    }}
                                    ></div>

                                {/* <div className="project_detailed_text" dangerouslySetInnerHTML={{__html: `${}`}}></div> */}
                            </div>
                            <div className="project_meta">
                                <h3>DETAILS</h3>
                                <div className="project_location">
                                    <h4>Location</h4>
                                    <p>{ourProject?.projectSidebar?.sidebarProjectLocation}</p>
                                </div>
                                <div className="project_duration">
                                    <h4>Duration</h4>
                                    <p>{ourProject?.projectSidebar?.sidebarProjectDuration}</p>
                                </div>
                                <div className="project_supporters">
                                    <h4>Our Supporters</h4>
                                    <p>{ourProject?.projectSidebar?.sidebarProjectSupporters?.supporterDescription}</p>
                                </div>
                                <div className="patner_logo">
                                    <Image src={ourProject?.projectSidebar?.sidebarProjectSupporters?.supporterLogo?.node ? ourProject?.projectSidebar?.sidebarProjectSupporters?.supporterLogo?.node?.sourceUrl : null} alt="GAC parternship colour logo" width={100} height={100} />
                                </div>
                                <div className="impact_btn">
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#" >Our Impact in 2023 </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad why_women_section issues_glance_section">
                        <div className="section_heading">
                            <h2>{ourProject?.projectContent?.sectionGlance?.glanceSectionHeading}</h2>
                        </div>
                        <div className="why_women_text_section">
                            <p>{ourProject?.projectContent?.sectionGlance?.glanceSectionDescription}</p>
                        </div>
                        <div className="why_women_counter_box">
                            <div className="women_counter_item">
                                <h4>{ourProject?.projectContent?.sectionGlance?.box1Glance?.box1GlanceHeading}</h4>
                                <p>{ourProject?.projectContent?.sectionGlance?.box1Glance?.box1GlanceTextDetails}</p>
                            </div>
                            <div className="women_counter_item">
                                <h4>{ourProject?.projectContent?.sectionGlance?.glanceBox2?.glanceBox2NumberHeading}</h4>
                                <p>{ourProject?.projectContent?.sectionGlance?.glanceBox2?.glanceBox2TextDetails}</p>
                            </div>
                            <div className="women_counter_item">
                            <h4>{ourProject?.projectContent?.sectionGlance?.glanceBox3?.glanceBox3NumberHeading}</h4>
                            <p>{ourProject?.projectContent?.sectionGlance?.glanceBox3?.glanceBox3TextDetails}</p>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad get_involved_section we_doing">
                        <div className="section_heading">
                            <h2>{ourProject?.projectContent?.sectionWhatWeDoing?.doingMainHeading}</h2>
                        </div>
                        <div className="involved_icon_section_wrap">
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                <Image className="involved_img" src={ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn1?.doingCol1Image ? ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn1?.doingCol1Image?.node?.sourceUrl : null} width={100} height={100} alt="Icon" />
                                </div>
                                <div className="involved_text">
                                    <h4>{ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn1?.doingCol1Heading}</h4>
                                    <p>{ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn1?.doingCol1Description}</p>
                                </div>
                            </div>
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                <Image className="involved_img" src={ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn2?.doingCol2Image ? ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn2?.doingCol2Image?.node?.sourceUrl : null} width={100} height={100} alt="Icon" />
                                </div>
                                <div className="involved_text">
                                    <h4>{ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn2?.doingCol2Heading}</h4>
                                    <p>{ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn2?.doingCol2Description}</p>
                                </div>
                            </div>
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                <Image className="involved_img" src={ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn3?.doingCol3Image ? ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn3?.doingCol3Image?.node?.sourceUrl : null} width={100} height={100} alt="Icon" />
                                </div>
                                <div className="involved_text">
                                    <h4>{ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn3?.doingCol3Heading}</h4>
                                    <p>{ourProject?.projectContent?.sectionWhatWeDoing?.doingColumn3?.doingCol3Description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad achieved_section">
                        <div className="achieved_text_1">
                            <h3>{ourProject?.projectContent?.sectionAchieve?.achieveMainHeading}</h3>
                            <div dangerouslySetInnerHTML={{
                                    __html: `${ourProject?.projectContent?.sectionAchieve?.achieveTextContent}`
                                }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}