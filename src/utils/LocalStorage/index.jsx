const USER_KEY = 'user';

/**
 * Save user data to localStorage
 * @param {Object} userData - The user data to save (name, email, token, etc.)
 */
export const saveUserData = (userData) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data to localStorage', error);
  }
};

/**
 * Retrieve user data from localStorage
 * @returns {Object|null} The retrieved user data or null if not found
 */
export const getUserData = () => {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving user data from localStorage', error);
    return null;
  }
};

export const clearUserData = () => {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error removing user data from localStorage', error);
  }
};
