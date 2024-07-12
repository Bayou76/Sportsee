class DataFormatter {
    static formatSessionData(userSessions) {
      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return userSessions.map((session, index) => ({
        day: daysOfWeek[index],
        sessionLength: session.sessionLength
      }));
    }
  
    static formatScoreData(score) {
      return [
        {
          name: 'Score',
          value: score,
          fill: '#FF0000',
        },
      ];
    }
  
    static formatPerformanceData(data, kind) {
      return data.map(item => ({
        subject: kind[item.kind - 1],
        value: item.value
      })).reverse();
    }
  
    static formatUserActivityData(userSessionsActivity) {
      return userSessionsActivity.map((session, index) => ({
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories
      }));
    }
  }
  
  export default DataFormatter;
  