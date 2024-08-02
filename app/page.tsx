import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Order from "./_components/Order";
import Product from "./_components/Product";
import Savingplan from "./_components/SavingPlan";
import Bonus from "./_components/Bonus";
import Subscriptions from "./_components/Subscriptions";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="py-8 md:px-[200px]">
        <Order />
        <Product />
        <Savingplan />
        <Bonus />
      </div>
      <Subscriptions />
      <Footer />
    </>
  );
}
