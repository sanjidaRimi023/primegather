import BannerSection from "./components/customs/banner";
import Brand from "./components/customs/brand";
import EventGallery from "./components/customs/galary";
import OfferPage from "./components/customs/offer";
import FeatureEvents from "./event/components/feature-events";


export default function Home() {
  return (
   <>
   <div>
    <BannerSection/>
    <EventGallery/>
<FeatureEvents/>
<OfferPage/>

<Brand/>
   </div>
   </>
  );
}
