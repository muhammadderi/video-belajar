const SectionWrapper = ({ height, children, url }) => {
  return (
    <section className="w-full md:py-[64px] md:px-[120px] w-[360px] py-[28px] px-[24px]">
      <div
        className={`${height} rounded-[10px] md:py-[82px] md:px-[140px] py-[64px] px-[20px] ${url} bg-cover bg-center gap-[24px] `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
