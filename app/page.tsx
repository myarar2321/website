import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import WhyJoinUs from "@/components/WhyJoinUs";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex h-full bg-gradient-to-tr from-[#010b14] to-[#140105] p-10">
        <div className="w-full max-w-screen-xl mx-auto">
          <Header />
        </div>
      </div>
      <div className="flex h-full bg-gradient-to-tr from-[#320c54] via-[#140105] to-[#010b14] p-10">
        <section id="purchase" className="w-full max-w-screen-xl mx-auto">
          <PricingSection />
        </section>
      </div>
      <div className="flex h-full bg-gradient-to-tr from-[#010b14] to-[#140105] p-10">
        <section id="whyjoinus" className="w-full max-w-screen-xl mx-auto">
          <WhyJoinUs />
        </section>
      </div>
      <div className="flex h-full bg-gradient-to-tr from-[#140105] to-[#010b14] p-10">
        <section className="w-full max-w-screen-xl mx-auto">
          <Footer />
        </section>
      </div>
    </Fragment>
  );
}
