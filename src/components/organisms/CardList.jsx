import { useEffect } from "react";
import Card from "../molecules/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducationList } from "../../../store/redux/usersSlice";

const CardList = () => {
  const dispatch = useDispatch();
  const { education } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchEducationList());
  }, [dispatch]);

  return (
    <div className="md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-2">
      {education.map((item, index) => (
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
