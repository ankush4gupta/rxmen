'use client';
import HeroScreen from "@/components/sections/HeroScreen";
import Navbar from "@/components/sections/Navbar";

import SearchSection from "@/components/sections/SearchSection";
import SpreadsheetSection from "@/components/sections/SpreadsheetSection";
import TrustedSection from "@/components/sections/TrustedSection";
import HeroScreen2 from "@/components/sections/HeroScreen2";
import Hero1 from "@/components/sections/Hero1";
import Hero2 from "@/components/sections/Hero2";
import GlobalSection from "@/components/sections/GlobalSection";

export default function Home() {

  return (
    <main>
      
      <Navbar/>
      <Hero1/>
      <Hero2/>
      {/* <GlobalSection/> */}
      {/* <HeroScreen2 /> */}
      {/* <HeroScreen /> */}
      <SpreadsheetSection/>
      <SearchSection/>
      <TrustedSection/>
    </main>
  );
}
