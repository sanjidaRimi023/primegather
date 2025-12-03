import BannerSection from "./components/customs/banner";
import Brand from "./components/customs/brand";
import EventGallery from "./components/customs/galary";
import FeatureEvents from "./event/components/feature-events";


export default function Home() {
  return (
   <>
   <div>
    <BannerSection/>
<FeatureEvents/>
<EventGallery/>
<Brand/>
   </div>
   </>
  );
}
