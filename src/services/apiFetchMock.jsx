import mockData from '../mockApi/mockData';

// Fonction pour récupérer les données principales de l'utilisateur
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    
    // Recherchez l'utilisateur par son ID dans les données fictives
    const user = mockData.USER_MAIN_DATA.find(user => user.id === userId);
    if (user) {
      resolve({ data: user });
    } else {
      reject(new Error('User not found'));
    }
  });
}

function fetchUserActivity(userId) {
  return new Promise((resolve, reject) => {
    const userActivity = mockData.USER_ACTIVITY.find(activity => activity.userId === userId);
    if (userActivity) {
      resolve({ data: { sessions: userActivity.sessions } });
    } else {
      reject(new Error('User activity data not found'));
    }
  });
}

function fetchAverageSessionDuration(userId) {
  return new Promise((resolve, reject) => {
    const userSessions = mockData.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    if (userSessions) {
      resolve({ data: { sessions: userSessions.sessions } });
    } else {
      reject(new Error('User session data not found'));
    }
  });
}

function fetchPerformance(userId) {
  return new Promise((resolve, reject) => {
    const userPerformance = mockData.USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (userPerformance) {
      resolve({ data: userPerformance });
    } else {
      reject(new Error('Performance data not found for this user'));
    }
  });
}

const apiFetchMock = {
  fetchUserData,
  fetchUserActivity,
  fetchAverageSessionDuration,
  fetchPerformance
};


export default apiFetchMock;