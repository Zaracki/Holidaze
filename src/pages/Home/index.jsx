
export const Home = () => {
  return (
<div className="relative">
      <img
        src="src/assets/hero-image.png"
        alt="Hero"
        className="w-full max-w-[1440px] max-h-[500px] object-cover mx-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Find Your Perfect Getaway at Holidaze
        </h1>
        <p className="text-white text-xl md:text-2xl max-w-[637px] mx-auto">
          We specialize in providing the best locations for your unforgettable holiday experience.
        </p>
      </div>
    </div>

  );
};