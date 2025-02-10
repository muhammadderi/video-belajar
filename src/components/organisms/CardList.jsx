import Card from "../molecules/Card";

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
      img: "/imagesCard/imgList-1.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-1.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-2.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-2.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-3.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-3.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-4.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-4.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-5.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-5.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-6.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-6.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-7.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-7.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-8.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-8.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
    {
      img: "/imagesCard/imgList-9.png",
      alt: "img-1",
      title: "Big 4 Auditor Financial Analyst",
      subTitle:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      imgMain: "/imagesSubCard/img-1.png",
      altMain: "imgMain-1",
      mainTitle: "Jenna Ortega",
      mainSubtitle: "Senior Acccountant di",
    },
  ];

  return (
    <div className="grid grid-flow-row grid-cols-3">
      {cardItem.map((item, index) => (
        <Card
          key={index}
          img={item.img}
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
