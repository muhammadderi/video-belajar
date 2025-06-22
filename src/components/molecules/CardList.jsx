import { useEffect, useState } from "react";
import { getEducationVideos } from "../../services/videosApi";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

const CardList = ({ sortOrder, searchTerm, className }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPage = Math.ceil(videos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const curVideos = videos.slice(startIndex, startIndex + itemsPerPage);
  const filteredVideos = curVideos.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );
  const currentVideos = [...filteredVideos].sort((a, b) => {
    if (sortOrder === "az") return a.title.localeCompare(b.title);
    if (sortOrder === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getEducationVideos();
        setVideos(data);
      } catch (error) {
        console.log("Gagal mengambil data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const gotoNextPage = () => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
  };

  const gotoPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (loading)
    return (
      <p className="font-bold justify-center items-center text-2xl animate-bounce text-[#3ECF4C] text-center">
        Loading....
      </p>
    );
  return (
    <>
      <div className={className}>
        {currentVideos.map((video, index) => (
          <Card
            key={index}
            image={video.images}
            title={video.title}
            subtitle={video.subTitle}
            imgIcon={video.imgMain}
            titleIcon={video.mainTitle}
            subtitleIcon={video.position}
            price={video.price}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 py-4 ">
        <Button
          onClick={gotoPrevPage}
          disabled={currentPage === 1}
          text={"Previous"}
          className={
            "rounded-full w-fit bg-[#3ECF4C] py-2 px-5 text-white hover:bg-white hover:border hover:text-[#3ECF4C]"
          }
        />
        <span className="text-[#3ECF4C] font-bold">
          Page {currentPage} of {totalPage}
        </span>
        <Button
          onClick={gotoNextPage}
          disabled={currentPage === totalPage}
          text={"Next"}
          className={
            "rounded-full w-fit bg-[#3ECF4C] py-2 px-5 text-white hover:bg-white hover:border hover:text-[#3ECF4C]"
          }
        />
      </div>
    </>
  );
};

export default CardList;
