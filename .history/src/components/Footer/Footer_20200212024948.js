import React, { Fragment } from "react";

const Footer = () => {
	return (
		<Fragment>
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Footer Content</h5>
							<p class="grey-text text-lighten-4">
								You can use rows and columns here to organize your footer
								content.
							</p>
						</div>
						<div class="col l4 offset-l2 s12">
							<h5 class="white-text">Links</h5>
							<ul>
								<li>
									<a class="grey-text text-lighten-3" href="#!">
										Link 1
									</a>
								</li>
								<li>
									<a class="grey-text text-lighten-3" href="#!">
										Link 2
									</a>
								</li>
								<li>
									<a class="grey-text text-lighten-3" href="#!">
										Link 3
									</a>
								</li>
								<li>
									<a class="grey-text text-lighten-3" href="#!">
										Link 4
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
						© 2014 Copyright Text
						<a class="grey-text text-lighten-4 right" href="#!">
							More Links
						</a>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
