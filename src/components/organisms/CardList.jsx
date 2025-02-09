import Card from "../molecules/Card";
import img1 from "../../assets/home/section-2/imgList-1.png";

const CardList = () => {
  // img,
  // alt,
  // title,
  // subTitle,
  // imgMain,
  // altMain,
  // mainTitle,
  // mainSubTitle,

  const cardItem = [
    {
      img: `${img1}`,
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "asdasdasdasd",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di <b>Gojek</b>",
    },
    {
      img: "srcassetshomesection-2imgCardListimgList-2.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "asdasdasdasd",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di <b>Gojek</b>",
    },
    {
      img: "asdasdasd",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "asdasdasdasd",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di <b>Gojek</b>",
    },
    {
      img: "asdasdasd",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "asdasdasdasd",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di <b>Gojek</b>",
    },
    {
      img: "asdasdasd",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "asdasdasdasd",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di <b>Gojek</b>",
    },
  ];

  return (
    <div className="grid grid-flow-row grid-cols-3">
      {cardItem.map((item, index) => (
        <Card
          key={index}
          img={item.image}
          alt={item.alt}
          title={item.title}
          subTitle={item.subTitle}
          imgMain={item.imgMain}
          altMain={item.altMain}
          mainTitle={item.mainTitle}
          mainSubTitle={item.mainSubtitle}
        />
      ))}
    </div>
  );
};

export default CardList;
