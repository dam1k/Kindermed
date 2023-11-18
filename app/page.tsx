import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team"
import Blog from "@/components/Blog"
import { Provider } from "react-redux";
import { store } from "@/store";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
        {/*<Provider store={store}>*/}
            <Team/>
        {/*</Provider>*/}
        <Blog/>
    </main>
  );
}
