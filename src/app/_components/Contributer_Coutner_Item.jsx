import Image from 'next/image';

export default function Contributer_Coutner_Item({item, cls=""}) {
    return (
        <div className="fl-col-group fl-node-082xyt4h56e1 fl-col-group-nested fl-col-group-equal-height fl-col-group-align-top" data-node="082xyt4h56e1">
            <div className="fl-col fl-node-qvmbfzrwak4c hp2023_stats_item" data-node="qvmbfzrwak4c">
                <div className="fl-col-content fl-node-content">
                    <div className="fl-module fl-module-photo fl-node-qdsicv9ar1bl hp2023_stats_item_icon" data-node="qdsicv9ar1bl">
                        <div className="fl-module-content fl-node-content">
                            <div className="fl-photo fl-photo-align-left" itemScope itemType="https://schema.org/ImageObject">
                                <div className="fl-photo-content fl-photo-img-svg">
                                    <Image alt="Image" width={`100`} height={`100`} loading="lazy" decoding="async" className="fl-photo-img wp-image-43622 size-full" src={item.counter_icon_url} itemProp="image" height="100" width="125" title="oxfam-urgent-assistance-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fl-module fl-module-uabb-numbers fl-node-8xr1gtieoupq hp2023_stats" data-node="8xr1gtieoupq">
                        <div className="fl-module-content fl-node-content">
                            <div className="uabb-module-content uabb-number uabb-number-default">
                                <div className="uabb-number-text">
                                    <p className="uabb-number-string">
                                        <span className="uabb-number-int" data-target={item.counter_target_no}>0</span> {item.counter_title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fl-module fl-module-rich-text fl-node-yjq74acpbh09" data-node="yjq74acpbh09">
                    <div className="fl-module-content fl-node-content">
                        <div className="fl-rich-text">
                        <p>{item.counter_desc}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    );
    }