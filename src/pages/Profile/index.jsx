import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import InputField from '../../components/InputField';
import { getUserData, saveUserData } from '../../utils/LocalStorage';
import { usePost } from '../../components/hooks/usePost';
import { API_BASE_URL } from '../../common/Constants';

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);  // Toggle input field
  const [newAvatarUrl, setNewAvatarUrl] = useState(''); // Store new avatar URL
  const { postData, loading, success, error } = usePost();

  // Fetch user data on mount
  useEffect(() => {
    const storedUserData = getUserData();
    if (storedUserData) {
      setUserData(storedUserData);
      setNewAvatarUrl(storedUserData.avatar?.url || ''); // Set the current avatar URL as default
    }
  }, []);

  // Handle image change button click
  const handleImageChangeClick = () => {
    setIsEditing(true); // Show the input field for avatar URL
  };

  // Handle form submit for avatar URL change
  const handleAvatarSubmit = async () => {
    const token = userData?.accessToken;
    const apiKey = userData?.apiKey;  // Retrieve the API key
    const name = userData?.name; // Get the user's name to construct the URL
  
    if (!token || !apiKey || !name) {
      console.error('Access token, API key, or user name is missing');
      return;
    }
  
    // Create payload for updating the avatar
    const updatedProfileData = {
      avatar: {
        url: newAvatarUrl,  // Updated avatar URL
        alt: `${userData.name}'s avatar`,  // Update the alt text
      },
    };
  
    // Make the PUT request to update the user profile
    await postData(`${API_BASE_URL}/profiles/${name}`, updatedProfileData, 'PUT', {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,  // Add the API key header
    });
  
    if (success) {
      // Update localStorage with the new user data
      const updatedUserData = {
        ...userData,
        avatar: updatedProfileData.avatar, // Update avatar in localStorage
      };
      saveUserData(updatedUserData);
  
      // Reload the page or update the profile view
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

          {/* Show input field if editing */}
          {isEditing ? (
            <div className="flex flex-col items-center">
              <InputField
                label="New Avatar URL"
                type="text"
                value={newAvatarUrl}
                onChange={(e) => setNewAvatarUrl(e.target.value)}
                placeholder="Enter new avatar URL"
              />
              <PrimaryButton onClick={handleAvatarSubmit} disabled={loading}>
                {loading ? 'Updating...' : 'Save New Avatar'}
              </PrimaryButton>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && <p className="text-green-500 mt-2">Avatar updated successfully!</p>}
            </div>
          ) : (
            <div className="text-center">
              <PrimaryButton onClick={handleImageChangeClick}>
                Change Image
              </PrimaryButton>
            </div>
          )}
        </div>

        <h2 className="text-3xl font-medium mb-4 mt-6">My bookings</h2>
        <hr className="mt-3 mb-6 border-gray-400" />
        <div className="max-w-[632px] w-full bg-white mb-8">
          <div className="flex items-center h-[200px] max-h-[200px]">
            <img
              src="src/assets/hero-image.png"
              alt="Details"
              className="w-[200px] h-[200px] object-cover"
            />
            <div className="ml-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Booking Details</h2>
              <p className="text-gray-600 mb-1">Check-in: September 25, 2024</p>
              <p className="text-gray-600 mb-1">Check-out: September 30, 2024</p>
              <p className="text-gray-600 mb-1">Guests: 2</p>
              <p className="text-gray-600 mb-1">Total: $500.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
