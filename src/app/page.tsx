import { Header } from "./blocks/Header";
import { MainContent } from "./blocks/MainContent";
import { Services } from "./blocks/Services";
import { AboutCompany } from "./blocks/AboutCompany";
import { Copyright } from "./blocks/Copyright";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding-top equal to header height (h-16 = 64px) */}
        <MainContent />
        <Services />
        <AboutCompany />
        <Copyright />
      </main>
    </>
  );
}
