import mockData from '../mockApi/mockData';

// Fonction pour récupérer les données principales de l'utilisateur
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    
    // Recherchez l'utilisateur par son ID dans les données fictives
    const user = mockData.USER_MAIN_DATA.find(user => user.id === userId);
    if (user) {
      resolve(user);
    } else {
      reject(new Error('User not found'));
    }
  });
}

function fetchUserActivity(userId) {
  return new Promise((resolve, reject) => {
    const userActivity = mockData.USER_ACTIVITY.find(activity => activity.userId === userId);
    if (userActivity) {
      resolve(userActivity.sessions);
    } else {
      reject(new Error('User activity data not found'));
    }
  });
}

function fetchAverageSessionDuration(userId) {
  return new Promise((resolve, reject) => {
    const userSessions = mockData.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    if (userSessions) {
      const sessionData = userSessions.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
      }));
      resolve(sessionData);
    } else {
      reject(new Error('User session data not found'));
    }
  });
}

function fetchPerformance(userId) {
  return new Promise((resolve, reject) => {
    const userPerformance = mockData.USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (userPerformance) {
      const kindNames = {
        1: 'Cardio',
        2: 'Énergie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
      };

      // Transformez les données de performances en un format approprié
      const performanceData = {
        userId: userPerformance.userId,
        data: userPerformance.data.map(item => ({
          kind: kindNames[item.kind],
          value: item.value
        }))
      };
      resolve(performanceData);
    } else {
      reject(new Error('Performance data not found for this user'));
    }
  });
}

const apiFetch = {
  fetchUserData,
  fetchUserActivity,
  fetchAverageSessionDuration,
  fetchPerformance
};


export default apiFetch;