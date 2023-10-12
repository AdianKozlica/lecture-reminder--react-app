import { useState } from 'react';
import logo from './logo.svg';
import Calendar from './components/Calendar';

function App() {
  const [refresh, setRefresh] = useState<boolean>();
  const [schedule, setSchedule] = useState<Record<string, any>>({
    "Mon":{
      "15:15":"Programiranje 1",
      "16:12":"Programiranje 1",
      "16:45":"Programiranje 1"
    },
    "Tue":{},
    "Wed":{},
    "Thu":{},
    "Fri":{},
    "Sat":{},
    "Sun":{}
  });

  const [activeDays, setActiveDays] = useState<Record<string, boolean>>({
    "Mon": true,
    "Tue": false,
    "Wed": false,
    "Thu": false,
    "Fri": false,
    "Sat": false,
    "Sun": false
  });

  const days = Object.keys(schedule);

  const setActiveDay = (day: string) => {
    for (const dayValue of days) 
      activeDays[dayValue] = dayValue == day;

    setActiveDays(activeDays);
    setRefresh(!refresh);
   };

  return (
    <div className="App">
      <div className="days">
        {days.map(day => (
          <button onClick={() => setActiveDay(day)}>{day}</button>
        ))}
      </div>
      {days.map(day => (
        <Calendar 
          key={crypto.randomUUID()}
          day={day}
          scheduleState={schedule}
          active={activeDays[day]}
          values={schedule[day]}
          stateFunction={setSchedule}></Calendar>
      ))}
    </div>
  );
}

export default App;