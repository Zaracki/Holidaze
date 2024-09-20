import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import { useParams } from 'react-router-dom';
import { API_URL, API_BASE_URL } from '../../common/Constants';
import useFetch from '../../components/hooks/useFetch';
import MetaSelect from '../../components/MetaSelect'; 
import { useHttp } from '../../components/hooks/useHttp';
import { getUserData } from '../../utils/LocalStorage';

export const Venue = () => {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(`${API_URL}/${id}?_owner=true`);
  const { sendRequest, loading, error, success } = useHttp();
  const [formData, setFormData] = useState({
    dateFrom: '',
    dateTo: '',
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = getUserData();
    const token = userData?.accessToken;
    const apiKey = userData?.apiKey;

    if (!token || !apiKey) {
      console.error("Missing access token or API key");
      return;
    }

    const bookingData = {
      dateFrom: formData.dateFrom,
      dateTo: formData.dateTo,
      guests: Number(formData.guests),
      venueId: id,
    };

    await sendRequest(`${API_BASE_URL}/holidaze/bookings`, 'POST', bookingData, {
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    });

    if (success) {
      console.log('Booking created successfully!');
      setFormData({ dateFrom: '', dateTo: '', guests: 1 });
    }
  };

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
  const { name, description, media, price, owner, meta, location } = venue;

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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date-from">
                Date From
              </label>
              <input
                type="date"
                id="date-from"
                name="dateFrom"
                value={formData.dateFrom}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-600 bg-white text-grey rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date-to">
                Date To
              </label>
              <input
                type="date"
                id="date-to"
                name="dateTo"
                value={formData.dateTo}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-600 bg-white text-grey rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="guests">
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-600 bg-white text-grey rounded-md"
                placeholder="Enter number of guests"
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-lg text-white font-semibold">Total: ${price || '0.00'}</p>
            </div>
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? 'Booking...' : 'Book'}
            </PrimaryButton>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">Booking created successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
