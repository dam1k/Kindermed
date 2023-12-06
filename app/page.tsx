import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";

export default function Home() {
// const [width, setWidth] = useState<number>(0);
//     useEffect(() => {
//         setWidth(window.innerWidth);
//
//         window.addEventListener("resize", () => setWidth(window.innerWidth));
//         return () =>
//             window.removeEventListener("resize", () => setWidth(window.innerWidth));
//     }, []);
  return (
        <main>
              <img
                src="/Gradient.jpg"
                alt=""
                className="object-cover z-[-1] max-[1400px]:hidden h-screen absolute top-0 left-0 w-full saturate-0"
              />
          {/*<div className="absolute top-0 left-0 w-full max-[1400px]:hidden h-screen z-[1] bg-[#fff]/[0.90]" />*/}

            <div className="min-[1401px]:hidden h-[calc(100%+322px)] absolute top-0 left-0 w-full">
                <img
                    src="/Hero.jpg"
                    alt=""
                    className="object-cover translate-y-[-100px] h-full w-full saturate-0"
                />
            </div>
            <div className="absolute top-0 left-0 w-full min-[1401px]:hidden h-[calc(100%+322px)] z-[1] bg-[#fff]/[0.90]" />

          <div className="relative z-[2]">
              {/*<Provider store={store}>*/}
                    <Hero />
              {/*</Provider>*/}
            <Services />
            {/*<Provider store={store}>*/}
                <Team />
            {/*</Provider>*/}
            <Blog />
          </div>
        </main>
  );
}
