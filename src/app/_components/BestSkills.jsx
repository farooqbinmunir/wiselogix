import {IconsGroup, class_Icon} from '@/app/exports';
import Image_wp from '../_assets/images/icon-wp.png';
import Image_shopify from '../_assets/images/icon-shopify.png';
import Image_figma from '../_assets/images/icon-figma.png';

export default function BestSkills(){

    const workIconsGroupData = [
		new class_Icon(Image_wp, 'WordPress'),
		new class_Icon(Image_shopify, 'Shopify'),
		new class_Icon(Image_figma, 'Figma')
	];

    return <IconsGroup title="Best skills on" images={workIconsGroupData} />;
}