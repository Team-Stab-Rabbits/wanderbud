const { fetchJourney, joinJourney, unjoinJourney, userJourney, deleteJourneyDispatch, journeySlice } = require('../../client/reducers/journeySlice.jsx');
const store = require('../../client/store');


describe('Reducers should appear here', () => {
  let state;

  beforeEach(() => {
    state = {
      count: 0,
      journeys: [],
      upcomingJourneys: [],
      completedJourneys: []
    }
  });


  describe('default state', () => {
    console.log(journeySlice)
    console.log(store); 
    expect(true).toBe(true); 
    })

  test('should console.log something', () => {
      expect(true).toBe(true); 
  })
})