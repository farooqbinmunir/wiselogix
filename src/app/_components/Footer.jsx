export default function Footer() {
    return (
        <footer className="fl-page-footer-wrap" itemScope="itemscope" itemType="https://schema.org/WPFooter">

          	<h2 className="sr-only">Footer</h2>

          	<div className="footer_wrapper">

            {/*<!-- Footer Column 1 -->*/}
            <div className="footer_col column1">

              <div className="h5 white">Lorem ipsum dolor sit amet consectetur.</div>

              <h3 id="footer-sn-title" className="sr-only">Connect with us</h3>
              <ul aria-labelledby="footer-sn-title" className="footer_sn_icons">
                <li>
                  <a href="#" target="_self" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" aria-label="Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
				        <li>
                  <a href="#" target="_self" aria-label="Tiktok">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </li>
              </ul>

              <h3 id="footer-sn-contact" className="sr-only">Contact Us</h3>
              <div aria-labelledby="footer-sn-contact" className="footer_contact" role="region">
                {/*<div><i className="ua-icon ua-icon-location-pin" aria-hidden="true"></i>39 McArthur Ave. Ottawa, Ontario, K1L 8L7</div>*/}
                <div className="contact_item">
					<i className="fas fa-envelope"></i>
                  	<a href="mailto:info@gmail.com" className="mail-link">info@gmail.com</a>
                </div>
                <div className="contact_item">
					<i className="fas fa-phone"></i>
                  	<a href="tel:"><span className="sr-only">Phone:&nbsp;</span>+123456789</a>
                </div>
                <div className="contact_item">
					<i className="fas fa-paper-plane"></i>
                  	<a href="#">Lorem Acknowledgement</a>
                </div>
              </div>

            </div>
            {/* Footer Column 1 */}
            {/* Footer Column 2 */}
            <div className="footer_col column2">
              <h3 id="footer-useful-title" className="footer-nav-heading white">Useful links</h3>
              <ul aria-labelledby="footer-useful-title" className="footer_useful_links linostyle nomargin nopadding footer-nav-links">
                <li><a href="#" target="_self">Home</a></li>
                <li><a href="#" target="_self">About</a></li>
                <li><a href="#" target="_self">Campaigns</a></li>
                <li><a href="#" target="_self">Get Involved</a></li>
                <li><a href="#" target="_self">Blog</a></li>
                <li><a href="#" target="_self">Resources</a></li>
				        <li><a href="#" target="_self">Our Gallery</a></li>
                <li><a href="#" target="_self">Contact</a></li>
              </ul>
            </div>
            {/* Footer Column 2 */}
            {/* Footer Column 3 */}
            <div className="footer_col column3">
              <img className="oxfam_logo" src="assets/images/white-logo.png" aria-hidden="true" alt=""
                height="144" width="362" />
              <div className="footer_member">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, incidunt!</div>
              <div className="logos_2col">
			  	<a href="#" target="_self" className="oxfam_orange_button oxfam_button footer_donate_button">Donate</a>
              </div>
            </div>
            {/* Footer Column 3 */}

          </div>

          {/* Post footer */}
          <div className="postfooter" style={{
					display: "block",
				}}>
            <div className="postfooter_inner">
              <div className="col2 footer_info">
                <h3 id="footer-legal-title" className="sr-only">Legal Links</h3>
                <ul aria-labelledby="footer-legal-title" className="nopadding nomargin">
                  <li className="footer_info_item"><a className="white" href="#">Privacy
                      Policy</a></li>
                  <li className="footer_info_item"><a className="white" href="#">Accessibility</a>
                  </li>
                  <li className="footer_info_item"><a className="white"
                      href="#">Careers</a></li>
                  <li className="footer_info_item"><a className="white"
                      href="#">About Us</a></li>
                </ul>
              </div>
              <div className="col3 footer_info">&copy; 2025 Wiselogix Technologies</div>
            </div>
          </div>

          <div className="footer_bottomline"></div>
          {/* Post footer */}



        </footer>
    );
}