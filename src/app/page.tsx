import Hero from "@/components/Widgets/Hero";
import Jwellery from "@/components/Widgets/Jwellery";
import Newsletter from "@/components/Widgets/Newsletter";
import Promotion from "@/components/Widgets/Promotion";
import ProductSection from "@/components/Widgets/ProductDisplay";


export default async function Home() {

  return (
    <main>
      <Hero />
      {/* @ts-ignore */}
      <Promotion />
      {/* @ts-ignore */}
      <ProductSection />
      {/* @ts-ignore */}
      <Jwellery />
      <Newsletter />
    </main>
  )
}
