const SectionWrapper = ({ height, children, url }) => {
  return (
    <section className="w-full py-[64px] px-[120px]">
      <div
        className={`${height} rounded-[10px] py-[82px] px-[140px]  ${url} bg-cover bg-center gap-[24px] `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
