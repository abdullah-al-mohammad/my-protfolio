import Banner from './banneer/page';
import Contact from './contact/page';
import Education from './education/page';
import Footer from './footer/page';
import Skills from './my-skills/page';
import Navbar from './navbar/page';
import Portfolio from './portfolio/page';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <Navbar></Navbar>
      <div className="space-y-20">
        <Banner></Banner>
        <Skills></Skills>
        <Education></Education>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </main>
  );
}
