import Button from "../atoms/Button";
import CardList from "../molecules/CardList";

const VideoCollections = () => {
  return (
    <div className="px-10 md:px-28 h-fit">
      <h3 className="capitalize text-3xl font-medium">
        koleksi video pembelajaran unggulan
      </h3>
      <p className="capitalize text-md">
        jelajahi dunia digital melalui pilihan kami!
      </p>
      <div className="flex gap-5 py-5 overflow-scroll md:overflow-auto">
        <Button
          text={"Semua Kelas"}
          className={
            "hover:text-orange-600 transition hover:underline hover:underline-offset-8 active:text-orange-600 active:underline active:underline-offset-8"
          }
        />
        <Button
          text={"Pemasaran"}
          className={
            "hover:text-orange-600 transition hover:underline hover:underline-offset-8 active:text-orange-600 active:underline active:underline-offset-8"
          }
        />
        <Button
          text={"Desain"}
          className={
            "hover:text-orange-600 transition hover:underline hover:underline-offset-8 active:text-orange-600 active:underline active:underline-offset-8"
          }
        />
        <Button
          text={"Pengembangan Diri"}
          className={
            "hover:text-orange-600 transition hover:underline hover:underline-offset-8 active:text-orange-600 active:underline active:underline-offset-8"
          }
        />
        <Button
          text={"Bisnis"}
          className={
            "hover:text-orange-600 transition hover:underline hover:underline-offset-8 active:text-orange-600 active:underline active:underline-offset-8"
          }
        />
      </div>
      <CardList
        className={
          "grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 md:gap-2 gap-4 md:justify-end py-3 md:py-0"
        }
      />
    </div>
  );
};

export default VideoCollections;
