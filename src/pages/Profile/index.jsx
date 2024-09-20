import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import InputField from '../../components/InputField';
import { getUserData, saveUserData } from '../../utils/LocalStorage';
import { useHttp } from '../../components/hooks/useHttp';
import { API_BASE_URL } from '../../common/Constants';
import BookingCard from '../../components/Cards/BookingCard';

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const [newAvatarUrl, setNewAvatarUrl] = useState('');
  const { sendRequest, loading, success, error } = useHttp(); 

  useEffect(() => {
    const storedUserData = getUserData();
    if (storedUserData) {
      setUserData(storedUserData);
      setNewAvatarUrl(storedUserData.avatar?.url || ''); 
    }
  }, []);

  const handleAvatarSubmit = async () => {
    const token = userData?.accessToken;
    const apiKey = userData?.apiKey;
    const name = userData?.name;
  
    if (!token || !apiKey || !name) {
      console.error('Access token, API key, or user name is missing');
      return;
    }
  
    const updatedProfileData = {
      avatar: {
        url: newAvatarUrl,
        alt: `${userData.name}'s avatar`,
      },
    };
  
    await sendRequest(`${API_BASE_URL}/holidaze/profiles/${name}`, 'PUT', updatedProfileData, {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    });
  
    if (success) {
      const updatedUserData = {
        ...userData,
        avatar: updatedProfileData.avatar,
      };
      saveUserData(updatedUserData);
      window.location.reload();
    }
  };

  return (
<div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
  <div className="max-w-[632px] w-full mb-8">
    <h1 className="text-3xl font-medium mb-6">Profile</h1>
    <div className="bg-white p-6">
      <div className="flex items-center mb-6">
        <img
          src={userData.avatar?.url || "/path-to-default-image.png"}
          alt={userData.avatar?.alt || "Profile Image"}
          className="w-[100px] h-[100px] rounded-full bg-gray-300 object-cover"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{userData.name || 'User'}</h2>
          <p className="text-gray-600">Host</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <InputField
          label="New Avatar URL"
          type="text"
          value={newAvatarUrl}
          onChange={(e) => setNewAvatarUrl(e.target.value)}
          placeholder="Enter new avatar URL"
        />
        <PrimaryButton onClick={handleAvatarSubmit} disabled={loading}>
          {loading ? 'Updating...' : 'Change Image'}
        </PrimaryButton>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">Avatar updated successfully!</p>}
      </div>
    </div>

    <h2 className="text-3xl font-medium mb-4 mt-6">My bookings</h2>
    <hr className="mt-3 mb-6 border-gray-400" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <BookingCard />
      <BookingCard />
    </div>
  </div>
</div>
  );
};