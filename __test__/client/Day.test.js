const { fetchJourney, joinJourney, unjoinJourney, userJourney, deleteJourneyDispatch, journeySlice } = require('../../client/reducers/journeySlice.jsx');
const store = require('../../client/store');
import React from 'react';
import Day from '../../client/components/Day.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; 
/**
 * @jest-environment-jsdom
 */

/*
  | Day component
    | should have a specific day assigned to each component
    | should render the specific day as a number in the component
    | should fetch Journeys and render them (IF the Journeys are occurring on the given day)
    | should have an onClick property for each Journey displayed

Month
  query for any journeys that start/end within the given month
  for ()
    rows.push(<Row />)


Row
  for ()
    days.push(<Day />)

Day 
  query store (needs to be added in Month component) for 
*/


xdescribe('Day component tests', () => {
  let component;
  const props = {
    monthNum: 6,
    dayNum: 1,
    journeys: [
      {
        origin: 'Cairo',
        destination: 'Paris',
        startDate: '2022-03-01',
        endDate: '2022-06-04',
        creator: 'Dominic Genuario',
        journeyId: '1a1b1c' 
      },
      {
        origin: 'NYC',
        destination: 'LA',
        startDate: '2022-06-01',
        endDate: '2022-06-07',
        creator: 'Jacob Policano',
        journeyId: '1a1b2c'
      },
      {
        origin: 'Boston',
        destination: 'NYC',
        startDate: '2022-06-03',
        endDate: '2022-07-05',
        creator: 'Paul Yi',
        journeyId: '1a1b5c'
      },
      {
        origin: 'NYC',
        destination: 'Miami',
        startDate: '2022-06-04',
        endDate: '2022-06-10',
        creator: 'HyeJin Kim',
        journeyId: '1a1b3c'
      },
      {
        origin: 'NYC',
        destination: 'Naples',
        startDate: '2022-06-02',
        endDate: '2022-06-05',
        creator: 'Davis Zung',
        journeyId: '1a1b4c'
      }
    ]
  }
  beforeAll(() => { 
    component = render(<Day id={props.dayNum} />);
  });
  
  it('renders a day to the page with a color style', () => {
   
    const currentDay = document.getElementById('1');
    console.log(currentDay.id); 
    expect(currentDay).toHaveStyle('color: rgb(86, 90, 93)');
  })

   
  // it('should render a day to the page', ())
  
  
  // it('should contain a specific day assigned to the component', () => {
  //   const component = createRenderer(<Day dayNum={props.dayNum} />);

  // });


});
