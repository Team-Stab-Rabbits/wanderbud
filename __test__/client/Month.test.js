const { fetchJourney, joinJourney, unjoinJourney, userJourney, deleteJourneyDispatch, journeySlice } = require('../../client/reducers/journeySlice.jsx');
const store = require('../../client/store');
import React from 'react';
import Month from '../../client/components/Month.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Week from '../../client/components/Week.jsx';
/**
 * @jest-environment-jsdom
 */

// Month should render a month component
// Should render 5 week components
// Should render week components as siblings

describe('Month/Week component tests', () => {

    describe('Month Component tests', () => {
        beforeEach(() => { 
            render(<Month />);
          });
          it('should render a Month to the page', () => {
            expect(screen.getByTitle("May")).toBeInTheDocument();
          })
          it('should render 5 week components', () => {
              expect(screen.getByTitle("week1")).toBeInTheDocument();
              expect(screen.getByTitle("week2")).toBeInTheDocument();
              expect(screen.getByTitle("week3")).toBeInTheDocument();
              expect(screen.getByTitle("week4")).toBeInTheDocument();
              expect(screen.getByTitle("week5")).toBeInTheDocument();
          })
          it ('should render week components as siblings', () => {
              expect(screen.getByTitle("week1").nextSibling).toHaveAttribute("title", "week2");
              expect(screen.getByTitle("week2").nextSibling).toHaveAttribute("title", "week3");
              expect(screen.getByTitle("week3").nextSibling).toHaveAttribute("title", "week4");
              expect(screen.getByTitle("week4").nextSibling).toHaveAttribute("title", "week5");
          })
      
    })
    
    describe('Week component tests', () => {
        beforeEach(() => {
            render(<Week title="week1" />)
        })
        
        it('should render a week in the document', () => {
            expect(screen.getByTitle("week1").toBeInTheDocument);
        })
        // it('should render 7 days', () => {
        //    
        // })
    })
    
})

