import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import InputField from '../../components/InputField';
import FormLayout from '../../components/FormLayout';
import { useForm } from '../../components/hooks/useForm';
import { useHttp } from '../../components/hooks/useHttp';
import { API_URL } from '../../common/Constants';
import { getUserData } from '../../utils/LocalStorage';

export const CreateVenue = () => {
  const { formData, handleInputChange } = useForm({
    name: '',
    description: '',
    mediaUrl: '',
    mediaAlt: '',
    price: '',
    maxGuests: '',
    city: '',
    country: '',
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const { sendRequest, loading, error, success, data } = useHttp();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userData = getUserData();
    const token = userData?.accessToken;
    const apiKey = userData?.apiKey;
  
    if (!token || !apiKey) {
      console.error("Missing access token or API key");
      return;
    }
  
    const venueData = {
      name: formData.name,
      description: formData.description,
      media: formData.mediaUrl
        ? [{ url: formData.mediaUrl, alt: formData.mediaAlt || 'Venue image' }]
        : [],
      price: Number(formData.price),
      maxGuests: Number(formData.maxGuests),
      meta: {
        wifi: formData.wifi,
        parking: formData.parking,
        breakfast: formData.breakfast,
        pets: formData.pets,
      },
      location: {
        city: formData.city,
        country: formData.country,
      },
    };
  
    sendRequest(`${API_URL}`, 'POST', venueData, {
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    });
  };
  
  React.useEffect(() => {
    if (success && data) {
      console.log('Venue created successfully!', data);
    }
  }, [success, data]);

  return (
    <FormLayout title="Create Venue">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          label="Venue Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter venue name"
          required
        />
        <InputField
          label="Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter venue description"
          required
        />
        <InputField
          label="City"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="Enter city"
          required
        />
        <InputField
          label="Country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Enter country"
          required
        />
        <InputField
          label="Number of Guests"
          type="number"
          name="maxGuests"
          value={formData.maxGuests}
          onChange={handleInputChange}
          placeholder="Enter max number of guests"
          required
        />
        <InputField
          label="Price per Night"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Enter price per night"
          required
        />
        <InputField
          label="Venue Image URL"
          type="text"
          name="mediaUrl"
          value={formData.mediaUrl}
          onChange={handleInputChange}
          placeholder="Enter venue image URL"
        />
        <InputField
          label="Image Alt Text"
          type="text"
          name="mediaAlt"
          value={formData.mediaAlt}
          onChange={handleInputChange}
          placeholder="Enter image alt text"
        />

        {/* Meta options */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="wifi"
            checked={formData.wifi}
            onChange={(e) => handleInputChange({ target: { name: 'wifi', value: e.target.checked } })}
            className="mr-2"
          />
          <label className="text-white font-semibold">Wifi Available</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="parking"
            checked={formData.parking}
            onChange={(e) => handleInputChange({ target: { name: 'parking', value: e.target.checked } })}
            className="mr-2"
          />
          <label className="text-white font-semibold">Parking Available</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="breakfast"
            checked={formData.breakfast}
            onChange={(e) => handleInputChange({ target: { name: 'breakfast', value: e.target.checked } })}
            className="mr-2"
          />
          <label className="text-white font-semibold">Breakfast Available</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="pets"
            checked={formData.pets}
            onChange={(e) => handleInputChange({ target: { name: 'pets', value: e.target.checked } })}
            className="mr-2"
          />
          <label className="text-white font-semibold">Pets Allowed</label>
        </div>

        {/* Submit button */}
        <PrimaryButton className="w-full" type="submit" disabled={loading}>
          {loading ? 'Creating venue...' : 'Create Venue'}
        </PrimaryButton>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">Venue created successfully!</p>}
      </form>
    </FormLayout>
  );
};

export default CreateVenue;
