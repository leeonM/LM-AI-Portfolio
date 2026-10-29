import { Approach } from "@/components/Approach";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <a
        href="#solutions"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to solutions
      </a>
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <Approach />
      </main>
      <Footer />
    </>
  );
}
