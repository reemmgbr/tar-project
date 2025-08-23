import AnimatedBrandsSlider from "../AnimatedBrandsSlider";
import Loader from "../loader/Loader";
import Unique from "../Unique";
import Hero from "./Hero";
import PopularPublications from "./PopularPublications";
import Studio from "./Studio";
import Team from "./Team";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-20 md:space-y-24">
        <Studio />
        <Unique />
        <Team />

        <div>
          <Testimonials />
          <AnimatedBrandsSlider />
        </div>
        <PopularPublications />
      </div>
    </>
  );
}
