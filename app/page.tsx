import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team"
import Blog from "@/components/Blog"
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
        <Team/>
        <Blog/>
        <div className="h-screen"/>
    </main>
  );
}
