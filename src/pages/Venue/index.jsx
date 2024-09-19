import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../common/Constants';
import useFetch from '../../components/hooks/useFetch';
import MetaSelect from '../../components/MetaSelect'; 

export const Venue = () => {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(`${API_URL}/${id}?_owner=true`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading venue</div>;
  }

  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  const venue = data.data;
  const { name, description, media, price, owner, meta, location, bookings } = venue;

  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-10">
      <div className="w-full max-w-[1152px]">
        <img
          src={media && media.length > 0 ? media[0].url : 'src/assets/hero-image.png'}
          alt={media && media.length > 0 ? media[0].alt : 'Hero'}
          className="w-full h-[500px] object-cover mx-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start mt-8 max-w-[1152px] w-full">
        <div className="flex-1 max-w-full md:max-w-[1156px]">
          <div className="mb-8 text-white">
            <h1 className="text-3xl font-bold">{name || 'Venue Name'}</h1>
            <p className="text-lg">{location ? `${location.city}, ${location.country}` : 'Location'}</p>
            <div className="flex items-center mt-4">
              <div className="w-[45px] h-[45px] bg-gray-300 rounded-full">
                {owner?.avatar?.url && (
                  <img
                    src={owner.avatar.url}
                    alt={owner.avatar.alt}
                    className="w-full h-full rounded-full object-cover"
                  />
                )}
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{owner?.name || 'Owner Name'}</h2>
                <p>Host</p>
              </div>
            </div>
            <hr className="mt-3 mb-3 border-gray-600" />
            <p className="mt-2">{description || 'Venue description goes here.'}</p>
            <hr className="mt-3 mb-3 border-gray-600" />

            <MetaSelect
              iconPath="/path-to-wifi-icon.png"
              label="WiFi"
              isEnabled={meta?.wifi}
              description="High-speed internet throughout the property"
            />
            
            <MetaSelect
              iconPath="/path-to-pets-icon.png"
              label="Pets"
              isEnabled={meta?.pets}
              description="Pets allowed"
            />
            
            <MetaSelect
              iconPath="/path-to-parking-icon.png"
              label="Parking"
              isEnabled={meta?.parking}
              description="Parking available"
            />

            <MetaSelect
              iconPath="/path-to-breakfast-icon.png"
              label="Breakfast"
              isEnabled={meta?.breakfast}
              description="Breakfast included"
            />

          </div>
        </div>
        <div className="w-full md:w-[400px] p-4 bg-[#282828] mt-8 md:mt-0 md:ml-8 rounded-md">
          <h2 className="text-2xl text-white font-semibold mb-4">Booking Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date-from">
                Date From
              </label>
              <input
                type="date"
                id="date-from"
                name="date-from"
                className="w-full p-2 border border-gray-600 bg-white text-grey rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date-to">
                Date To
              </label>
              <input
                type="date"
                id="date-to"
                name="date-to"
                className="w-full p-2 border border-gray-600 bg-white text-grey rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-lg text-white font-semibold">Total: ${price || '0.00'}</p>
            </div>
            <PrimaryButton>
              Book
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};
