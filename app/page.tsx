import Footer from "@/components/HomeSections/Footer";
import Hero from "@/components/HomeSections/Hero";
import Products from "@/components/HomeSections/Products";
import Result from "@/components/HomeSections/Result";
import Specials from "@/components/HomeSections/Specials";
import Steps from "@/components/HomeSections/Steps";

export default function Home() {
  return (
    <main className="font-main flex min-h-screen flex-col items-center justify-between pt-14">
      <Hero />
      <div
        className={`bg-[url('/wavesMobile.svg')] aspect-[422/200] w-full bg-no-repeat bg-center bg-cover`}
      />
      <Specials />
      <Steps />
      <Result />
      <Products />
      <Footer />
    </main>
  );
}
