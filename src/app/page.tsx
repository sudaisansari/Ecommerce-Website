import Hero from "@/components/Widgets/Hero"
import Promotion from "@/components/Widgets/Promotion"

export default async function Home() {

  const res = await Hero();
  return (
    <>
      <main>
        {/* @ts-ignore */}
        <Hero />
        {/* @ts-ignore */}
        <Promotion />
      </main>
    </>
  )
}
