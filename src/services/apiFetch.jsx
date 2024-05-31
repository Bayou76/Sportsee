const BASE_URL = 'http://localhost:3000';

async function fetchUserData(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

async function fetchUserActivity(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function fetchAverageSessionDuration(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function fetchPerformance(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const apiFetch = {
  fetchUserData,
  fetchUserActivity,
  fetchAverageSessionDuration,
  fetchPerformance
};

export default apiFetch;
