import {IconsGroup, class_Icon} from '@/app/exports';
import Image_fb from '../_assets/images/facebook.png';
import Image_li from '../_assets/images/linkedin.png';
import Image_tw from '../_assets/images/twitter.png';

export default function FindWithMe(){

    const socialIconsGroupData = [
		new class_Icon(Image_fb, 'Facebook'),
		new class_Icon(Image_li, 'LinkedIn'),
		new class_Icon(Image_tw, 'Twitter')
	];

    return <IconsGroup title="Find with me" images={socialIconsGroupData} />;
}