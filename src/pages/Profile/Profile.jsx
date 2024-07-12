import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Welcome from "../../components/Welcome/Welcome";
import UserActivity from "../../components/UserActivity/UserActivity";
import UserSessionDuration from "../../components/UserSessionDuration/UserSessionDuration";
import UserPerformance from '../../components/UserPerformance/UserPerformance';
import UserScoreRadialBarChart from '../../components/UserScoreRadialBarChart/UserScoreRadialBarChart';
import apiFetch from "../../services/apiFetch";
import apiFetchMock from "../../services/apiFetchMock"; // Importer l'API simulée
import Error from "../Error/Error";
import KeyInfo from '../../components/KeyInfo/KeyInfo';
import calories from '../../assets/calories-icon.png';
import proteines from '../../assets/protein-icon.png';
import glucides from '../../assets/carbs-icon.png';
import lipides from '../../assets/fat-icon.png';

import "./profile.scss";

function Profile() {
  const { id } = useParams();
  const userId = parseInt(id);
  const [userData, setUserData] = useState(null);
  const [userSessionsActivity, setUserSessionsActivity] = useState(null);
  const [userSessions, setUserSessions] = useState([]);
  const [userSessionsPerformance, setUserSessionsPerformance] = useState(null);
  const [error, setError] = useState(false);

  // Définir un true ou false pour utiliser l'API simulée ou l'API réelle
  const useMock = false;
  const api = useMock ? apiFetchMock : apiFetch; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await api.fetchUserData(userId);
        setUserData(userDataResponse.data);

        const activityResponse = await api.fetchUserActivity(userId);
        setUserSessionsActivity(activityResponse.data.sessions);

        const durationResponse = await api.fetchAverageSessionDuration(userId);
        console.log('Session Duration:', durationResponse); 
        setUserSessions(durationResponse.data.sessions); 

        const performanceResponse = await api.fetchPerformance(userId);
        console.log('User Performance:', performanceResponse);
        setUserSessionsPerformance(performanceResponse.data); 

      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
      }
    };

    fetchData();
  }, [userId, api]); 

  if (error) {
    return <Error />;
  }

  if (!userData || !userSessionsActivity || !userSessions || !userSessionsPerformance) {
    return <div>Loading...</div>;
  }

  const firstName = userData.userInfos.firstName || 'Utilisateur';

  return (
    <div>
      <Header />
      <Sidebar />
      <main className="user">
        <Welcome name={firstName} />
        <div className="profile-content">
          <div className="profile-main-content">
            <div className="profile-activity">
              {Array.isArray(userSessionsActivity) && userSessionsActivity.length > 0 ? (
                <UserActivity userSessionsActivity={userSessionsActivity} />
              ) : (
                <div>data invalide</div>
              )}
              <div className="profile-stats">
                {Array.isArray(userSessions) && userSessions.length > 0 ? (
                  <UserSessionDuration userSessions={userSessions} />
                ) : (
                  <div>session duration invalide</div>
                )}
                <UserPerformance performanceData={userSessionsPerformance} />
                <UserScoreRadialBarChart score={(userData.todayScore || userData.score) * 100} />
              </div>
            </div>
          </div>
          <div className="profile-key-data">
            <div className="key-data">
              <KeyInfo label="Calories" value={userData.keyData.calorieCount} unit="kCal" icon={calories} />
              <KeyInfo label="Proteines" value={userData.keyData.proteinCount} unit="g" icon={proteines} />
              <KeyInfo label="Glucides" value={userData.keyData.carbohydrateCount} unit="g" icon={glucides} />
              <KeyInfo label="Lipides" value={userData.keyData.lipidCount} unit="g" icon={lipides} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
