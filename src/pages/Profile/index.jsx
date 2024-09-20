import BookingCard from "../../components/Cards/BookingCard";

export const Profile = () => {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-[632px] w-full mb-8">
        <h1 className="text-3xl font-medium mb-6">Profile</h1>
        <div className="bg-white p-6">
          <div className="flex items-center mb-6">
            <img
              src="/path-to-default-image.png"
              alt="Profile Image"
              className="w-[100px] h-[100px] rounded-full bg-gray-300 object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Test</h2>
              <p className="text-gray-600">Host</p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-medium mb-4 mt-6">My bookings</h2>
    <hr className="mt-3 mb-6 border-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <BookingCard />
      </div>
      </div>
    </div>
  );
};