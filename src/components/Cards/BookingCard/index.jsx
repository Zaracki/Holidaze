

const BookingCard = () => {
  return (
    <div className="w-[311px] h-[400px] overflow-hidden relative bg-white ">
      <div className="h-[233px] w-full">
        <img
          src="src/assets/hero-image.png"
          alt="Details"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pl-4 pt-2 flex relative">
        <div className="flex flex-col flex-1 pr-4">
          <h3 className="text-xl font-semibold mb-2">Booking Details</h3>
          <p className="text-gray-600 mb-1">Check-in: September 25, 2024</p>
          <p className="text-gray-600 mb-1">Check-out: September 30, 2024</p>
          <p className="text-gray-600 mb-1">Guests: 2</p>
          <p className="text-gray-600 mb-1">Total: $500.00</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
