import Script from 'next/script';
import { Link } from 'next/link';
import { Image } from "next/image";
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';

// IMPORTING CSS
// Thirdparty Libs CSS
import "../../public/assets/css/slick/slick.css";
import "../../public/assets/css/bootstrap-3.4.1.css";
import "../../public/assets/css/fontawesome.css";
import "../../public/assets/css/lightbox.min.css";
// Merged Custom CSS
import "../../public/assets/css/merged.css";
import "../../public/assets/css/merged-responsive.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/responsive.css";

export const metadata = {
  title: "Wiselogix Nextjs Application",
  description: "Lorem ipsum dolor sit amet",
};
export default function RootLayout({ children }) {
  	return (
		<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<title>Wiselogix Technologies</title>

			<meta name="description" content="Wiselogix Technologies offers Web Development, App Development, Software Development and much more..." />

			<link href="assets/images/favicon.ico" rel="favicon" type="image/x-icon" />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />

			{/*<!-- JS Files -->*/}
			{/* Load jQuery first */}
			<Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
			<Script src="/assets/js/jquery-migrate.js" strategy="beforeInteractive" />
			<Script src="/assets/js/slick.js" strategy="afterInteractive" />
		</head>
		<body className={`home page-template page-template-single-menuoverlap page-template-single-menuoverlap-php page page-id-43648 fl-builder fl-builder-2-8-3-7 fl-themer-1-4-11 fl-theme-1-7-14 fl-framework-bootstrap fl-preset-default fl-full-width os_Windows`}>
			
			<Header />
			{children}
			<Footer />

			{/* Scripts */}
			<Script src="assets/js/bootstrap.js" strategy="beforeInteractive" />
			<Script src="assets/js/lightbox.min.js" strategy="beforeInteractive" />
			<Script src="assets/js/main.js" strategy="afterInteractive" />
			<Script src="assets/js/custom.js" strategy="afterInteractive" />
		</body>
		</html>
  );
}
