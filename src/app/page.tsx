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
      <Services />
      <AboutCompany />
      <ContactUs />
      <Copyright />
    </>
  );
}
