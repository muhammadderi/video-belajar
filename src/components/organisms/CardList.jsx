import { useEffect, useState } from "react";
import Card from "../molecules/Card";
import { getEducationVideos } from "../../services/api";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEducationVideos = async () => {
      try {
        const data = await getEducationVideos();
        console.log('fetchEducationVideos :', data);
        setData(data);
      } catch (error) {
        console.log('Error fething videos :', error);
      }
    };

    fetchEducationVideos();
  },[])
 


  return (
    <div className="md:grid md:grid-flow-row md:grid-cols-3 md:gap-1">
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.images}
          alt={item.alt}
          title={item.title}
          subTitle={item.subTitle}
          imgMain={item.imgMain}
          altMain={item.altMain}
          mainTitle={item.mainTitle}
          mainSubTitle={item.mainSubtitle}
          position={item.position}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CardList;
