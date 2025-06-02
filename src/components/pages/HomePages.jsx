import Footer from "../molecules/Footer";
import Hero from "../molecules/Hero";
import Navbar from "../molecules/Navbar";
import NewsLetter from "../molecules/NewsLetter";
import VideoCollections from "../organisms/VideoCollections";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoCollections />
      <Footer />
    </div>
  );
};

export default HomePages;
