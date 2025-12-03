import BannerSection from "./components/customs/banner";
import Brand from "./components/customs/brand";
import EventGallery from "./components/customs/galary";
import OfferPage from "./components/customs/offer";
import WeAreSection from "./components/customs/we-are";
import FeatureEvents from "./event/components/feature-events";


export default function Home() {
  return (
   <>
   <div>
    <BannerSection/>
    <WeAreSection/>
    <EventGallery/>
<FeatureEvents/>
<OfferPage/>

<Brand/>
   </div>
   </>
  );
}
