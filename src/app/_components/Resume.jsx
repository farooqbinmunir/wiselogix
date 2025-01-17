'use client';
import {act, useState} from 'react';
import {NRSection, FeatureNHeading, ResumeBlock} from '../exports';
export default function Resume(){
    let featureText = `7+ years of experience`;
    let headingText = `My Resume`;
    const [activeTab, setactiveTab] = useState('education');
    return(
        <>
            <NRSection id={`resume`} secFeatureTxt={featureText} secHeading={headingText} titleTag={`h1`} center={true}>
                <div className="resume-body-wrap">
                    <div className="resume-tabs m-block-50">
                        <div className="resume-tabs-wrap row">
                            <div className={activeTab === 'education' ? `resume-tab active-resume-tab` : `resume-tab`}>
                                <button className="resume-tab-btn resume-tab-edu-btn" onClick={() => setactiveTab('education')}>Education</button>
                            </div>
                            <div className={activeTab === 'professionalSkills' ? `resume-tab active-resume-tab` : `resume-tab`}>
                                <button className="resume-tab-btn resume-tab-skills-btn" onClick={() => setactiveTab('professionalSkills')}>Professional Skills</button>
                            </div>
                        </div>
                    </div>
                    <div className="resume-content">
                        <div className="resume-content-wrap">
                            {
                                activeTab == 'education' && 
                                <div className="row gap-40">
                                    <div className="column-6">
                                        <div className="eduation-quality">
                                            <FeatureNHeading featureText="1998-2010" headingText="Education Quality" headingTag="h1" classes="m-block-end-40" />
                                            <div className="resume-blocks">
                                                <div className="resume-block-wrap">
                                                    <ResumeBlock blockHeading="Msc in Computer Science" blockSubHeading="University Of Central Punjab (2003 - 2005)" blockDescription="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture." classes="m-block-50" />
                                                    <ResumeBlock blockHeading="BSc in Computer Science" blockSubHeading="Central College (2001 - 2003)" blockDescription="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture." classes="m-block-50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column-6">
                                        <div className="eduation-quality">
                                            <FeatureNHeading featureText="2010 - 2022" headingText="Job Experience" headingTag="h1" classes="m-block-end-40" />
                                            <div className="resume-blocks">
                                                <div className="resume-block-wrap">
                                                    <ResumeBlock blockHeading="CEO" blockSubHeading="Wiselogix - ( Present)" blockDescription="Leading Wiselogix to unprecedented heights with our visionary team and innovative approach, poised to disrupt and excel in the industry." classes="m-block-50" />
                                                    <ResumeBlock blockHeading="Team Lead" blockSubHeading="Uraan Software Solutions - (2007 - 2010)" blockDescription="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy." classes="m-block-50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                activeTab == 'professionalSkills' &&
                                <h1>Professional Skills tab opened</h1>
                            }
                            
                        </div>
                    </div>
                </div>
            </NRSection>
        </>
    );
}