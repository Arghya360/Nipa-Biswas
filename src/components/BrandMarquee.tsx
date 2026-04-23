const brands = [
  { name: "Google", logo: "Google" },
  { name: "Airbnb", logo: "airbnb" },
  { name: "Logitech", logo: "logitech" },
  { name: "Factual", logo: "Factual" },
  { name: "Matrixian", logo: "Matrixian" },
  { name: "Stripe", logo: "Stripe" },
];

const BrandMarquee = () => {
  return (
    <section className="py-8 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="flex w-full">
        <div className="flex animate-marquee items-center">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer whitespace-nowrap mx-12"
            >
              <span className="text-xl md:text-2xl font-semibold tracking-tight opacity-60 hover:opacity-100 transition-opacity">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee items-center" aria-hidden="true">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer whitespace-nowrap mx-12"
            >
              <span className="text-xl md:text-2xl font-semibold tracking-tight opacity-60 hover:opacity-100 transition-opacity">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
