import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "./blocks/Header";
import { Services } from "./blocks/Services";
import { AboutCompany } from "./blocks/AboutCompany";
import { ContactUs } from "./blocks/ContactUs";
import { Copyright } from "./blocks/Copyright";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding-top equal to header height (h-16 = 64px) */}
        <Services />
        <AboutCompany />
        <ContactUs />
        <Copyright />
      </main>
    </>
  );
}
