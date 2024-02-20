import React from 'react';
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

// function Calendar() {
//   const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
//   return (
//     <CalendarComponent value={dateValue} isMultiSelection={true} />
//   );
// }

// export default Calendar;


import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../datasource';

function Calendar() {
  const eventSettings = { dataSource: scheduleData };

  return (
    <div className='justify-self-start absolute bottom-[-12rem] left-[-48rem] top-10' style={{transform:"scale(0.7)"}}>
    <ScheduleComponent height='440px' width='500px' selectedDate={new Date(2018, 1, 15)}  eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    </div>
  );
}

export default Calendar;
