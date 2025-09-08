import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Banner from "./banneer/page";
import Skills from "./my-skills/page";
import Education from "./education/page";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<main className="max-w-screen-xl mx-auto px-4 lg:space-y-20 space-y-10">
				<Banner></Banner>
				<Skills></Skills>
				<Education></Education>
				<Portfolio></Portfolio>
				<Contact></Contact>
			</main>
			<Footer></Footer>
		</>
	);
}
