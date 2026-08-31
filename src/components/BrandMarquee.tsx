const items = [
  "DEVELOPMENT",
  "WEB DESIGN",
  "PROJECT & PRODUCT CONSULTING",
  "MOBILE APP DEVELOPMENT",
  "BRANDING & IDENTITY",
  "UI/UX DESIGN",
  "DIGITAL MARKETING",
];

const FourPointStar = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-current mx-6 sm:mx-8 shrink-0 inline-block"
    viewBox="0 0 24 24"
  >
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

const BrandMarquee = () => {
  return (
    <section className="relative overflow-hidden bg-[#ccff00] py-4 sm:py-5 select-none shadow-[0_0_30px_rgba(204,255,0,0.3)]">
      <div className="flex w-full overflow-hidden">
        {/* Track 1 */}
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {items.map((item, index) => (
            <div key={`track1-${index}`} className="flex items-center">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wider text-black font-sans">
                {item}
              </span>
              <FourPointStar />
            </div>
          ))}
        </div>

        {/* Track 2 for infinite smooth loop */}
        <div
          className="flex shrink-0 animate-marquee items-center whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <div key={`track2-${index}`} className="flex items-center">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wider text-black font-sans">
                {item}
              </span>
              <FourPointStar />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
