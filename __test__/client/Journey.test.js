import React from 'react';
import Journey from '../../client/components/Journey.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import store from '../../client/store'
import { Provider } from 'react-redux';

/**
 * @jest-environment-jsdom
 */


describe('Joruney Componenet Test', () => {
  let journeyComp;
  let container; 
  const journey = {
    origin: 'New York',
    destination: 'Las Angeles',
    startDate: new Date('07/01/1995').toLocaleDateString(),
    endDate: new Date('07/09/1995').toLocaleDateString(),
    creator: 'Jake',
    distance: 100,
    cost: 100,
    journey_id: 1,
  }

  beforeAll(() => {
     journeyComp = render(
      <Provider store ={store} >
        <Journey journey={journey} />
      </Provider>
    )
    container = journeyComp.container; 
  })

  describe('Rendering to Page', () => {
    
    test('Should render specific classes', () => { 
      expect(container.getElementsByClassName('journey-component')).toBeTruthy();
      expect(container.getElementsByClassName('journey-logo')).toBeTruthy();
      expect(container.getElementsByClassName('journey-img')).toBeTruthy();
      expect(container.getElementsByClassName('mainFrame')).toBeTruthy();
      expect(container.getElementsByClassName('topPart')).toBeTruthy();
      expect(container.getElementsByClassName('journey-label')).toBeTruthy();
      expect(container.getElementsByClassName('journey-trait-label')).toBeTruthy();
      expect(container.getElementsByClassName('journey-trait')).toBeTruthy();
      expect(journeyComp.getByRole('button')).toBeTruthy();
    })
  })
})

