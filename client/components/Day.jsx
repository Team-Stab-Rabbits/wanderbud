import React from 'react';
import { useSelector } from 'react-redux';
import { selectUpcomingJourneys, joinJourney } from '../reducers/journeySlice';
// import axios from 'axios';

/*
June 1
  grab all the journeys that contain today as a part of the trip
  rendered as components
    onclick -> modal that has a button that lets you add the journey to your profile
  useEffect -> window onClick
    
*/

const Day = props => {

  // grab array of journeys from state
  const upcoming = useSelector(selectUpcomingJourneys);
  const journeyList = [...upcoming];

  // destructure current year, month, and day from props (drilled from Month -> Week -> Day)
  const { date } = props;
  const currentDate = new Date([2022,6,date]);
  
  // determine from the list of journeys which journeys contain our day and add to array to be displayed within Day component
  // const journeys = journeyList.filter((journey, index) => {
  //   const start = new Date(journey.startDate);
  //   const end = new Date(journey.endDate);
  //   if (currentDate >= start && currentDate <= end) {
  //     return (
  //       <div id='dayJourneyContainer'>
  //         <span id={`journey${index}`} onClick={openModal}>
  //         { journey.destination }
  //         </span>
  //         <button onClick={() => joinJourney(journey)}>Join</button>
  //       </div>
  //     );
  //   }
  // });
  const journeys = [];
  for (let i = 0; i < journeyList.length; i++) {
    const start = new Date(journeyList[i].startDate);
    const end = new Date(journeyList[i].endDate);
    if (currentDate >= start && currentDate <= end) {
      // Create a new journey element which will display the name of the journey creator by default
      // Add on-click functionality to display modal and allow joining (pass along all journey details to the DayModal component)
      journeys.push(
        <div id='dayJourneyContainer'>
          <span id={`journey${i}`} className='destination'>
          { journeyList[i].destination }
          </span>
          <button className='joinBtn' onClick={() => joinJourney(journeyList[i])}>Join</button>
        </div>
      );
    }
  }
  console.log('In day component',journeys);
  

  return (
    <div id={props.id} className='day'>
      { date }
      { journeys.slice(0,3) }
    </div> 
  );
};

export default Day;









// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { userJourney } from '../reducers/journeySlice';
// import axios from 'axios';

// const Day = props => {
//   return (
//     <div id={props.id} className='day' num={props.dayNum} style={{color: 'rgb(86, 90, 93)'}}>
//       <div>{props.date}</div>
//     </div> 
//   );
// };





// export default Day;
