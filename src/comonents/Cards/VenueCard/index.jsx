import { Link } from "react-router-dom";

export const VenueCard = () => {
  return (
    <Link to="/Venue">
      <div className="w-[331px] h-[339px] border overflow-hidden relative">
        <div className="h-[233px] w-full">
          <img
            src="src/assets/test-img.jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pl-4 pt-2 flex relative">
          <div className="flex flex-col flex-1 pr-4">
            <p className="mb-1 text-xs">Bergen, Norway</p>
            <h2 className="text-2xl font-bold mb-1">Birchwood</h2>
            <h3 className="text-xl font-semibold">$97 / Night</h3>
          </div>
          <div className="absolute top-1 right-4">
            <span className="text-xs">Rating 4.9</span>
          </div>
        </div>
      </div>
    </Link>
  );
};