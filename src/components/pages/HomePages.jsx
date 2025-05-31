import Hero from "../molecules/Hero";
import Navbar from "../molecules/Navbar";
import VideoCollections from "../organisms/VideoCollections";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoCollections />
    </div>
  );
};

export default HomePages;
