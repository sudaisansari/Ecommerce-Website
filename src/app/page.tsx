import Hero from "@/components/Widgets/Hero"
import Product from "@/components/Widgets/Product";
import Promotion from "@/components/Widgets/Promotion"

export default async function Home() {

  const res = await Hero();
  return (
    <>
      <main>
        <Hero />
        {/* @ts-ignore */}
        <Promotion />
        {/* @ts-ignore */}
        <Product />
      </main>
    </>
  )
}
