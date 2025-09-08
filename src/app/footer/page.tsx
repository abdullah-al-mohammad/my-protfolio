import React from "react";
import "./footer.css";

export default function Footer() {
	return (
		<>
			<footer className="footer sm:footer-horizontal footer-center p-4 bg">
				<aside>
					<p>
						Copyright © {new Date().getFullYear()} - All right reserved by ACME
						Industries Ltd
					</p>
				</aside>
			</footer>
		</>
	);
}
