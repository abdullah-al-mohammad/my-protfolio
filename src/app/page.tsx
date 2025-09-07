import Image from "next/image";
import { Banner } from "./banneer/page";
import { Skills } from "./my-skills/page";
import { Education } from "./education/page";
import { Footer } from "./footer/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";

export default function Home() {
	return (
		<>
			<Banner></Banner>
			<div className="font-sans grid items-center justify-items-center">
				<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start  max-w-screen-xl mx-auto px-4 space-y-20 bg-custom-gradient`">
					<Skills></Skills>
					<Education></Education>
					<Portfolio></Portfolio>
				</main>
			</div>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
}
