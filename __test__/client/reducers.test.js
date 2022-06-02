// const { ContextExclusionPlugin } = require('webpack');
const { journeySlice } = require('../../client/reducers/journeySlice.jsx');
const { userSlice } = require('../../client/reducers/userSlice.jsx');
// fetchJourney, joinJourney, unjoinJourney, userJourney, deleteJourneyDispatch -> All names for both the action creators and the reducer functions. 
const journeyActions = journeySlice.actions;
const userActions = userSlice.actions;

describe('State Testing', () => {
  let userState;
  let journeyState;

  beforeEach(() => {
    userState = userSlice.reducer(undefined, {});
    journeyState = journeySlice.reducer(undefined, {}); 
  });

  describe('default state', () => {

    test('Reducers should produce state', () => {
      expect(userState).toBeTruthy();
      expect(journeyState).toBeTruthy();
    })

    test('users should have specific properties', () => {
      //Begin checking the appropriate properties
      const keys = Object.keys(userState);
      let search = 'users'
      let found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'id'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'age'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'email'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'firstName'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'lastName'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
    })

    test('store.journeys should have specific properties', () => {
      //Begin checking the appropriate properties
      const keys = Object.keys(journeyState);
      let search = 'count'
      let found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'journeys'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'completedJourneys'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
      search = 'upcomingJourneys'
      found = keys.find(el => el === search);
      expect(search).toEqual(found);
    })

  })
}),

describe('Reducer Testing', () => {
  let userState;
  let journeyState;

  beforeEach(() => {
    userState = userSlice.reducer(undefined, {});
    journeyState = journeySlice.reducer(undefined, {}); 
  });

  describe('Testing journey Reducer Functions', () => {

  
    test('fetchJourney should add to journeys and return new state', () => {
      const prevState = journeyState
      // creating and dispatching action
      const newState = journeySlice.reducer(journeyState, journeyActions.fetchJourney([1,2,3]))
      // this should have mutated state. 
      expect(newState).not.toBe(prevState);
      expect(newState.journeys.length).not.toEqual(prevState.journeys.length); 
    })

    test('userJourney should add to upcomingJourneys and return new state', () => {
      const prevState = journeyState
      // creating and dispatching action
      const newState = journeySlice.reducer(journeyState, journeyActions.userJourney([1,2,3]))
      // this should have mutated state. 
      expect(newState).not.toBe(prevState);
      expect(newState.upcomingJourneys.length).not.toEqual(prevState.upcomingJourneys.length); 
    })

    test('joinJourney should add to upcomingJourneys and return new state', () => {
      const prevState = journeyState
      // creating and dispatching action
      const newState = journeySlice.reducer(journeyState, journeyActions.joinJourney({}))
      // this should have mutated state. 
      expect(newState).not.toBe(prevState);
      expect(newState.upcomingJourneys.length).not.toEqual(prevState.upcomingJourneys.length); 
    })
    
    test('joinJourney should add to upcomingJourneys and return new state', () => {
      let prevState = journeySlice.reducer(journeyState, journeyActions.userJourney([{ journey_id: 10 }, { journey_id: 7 }, { journey_id: 1 }]))
      // this should remove this item now. 
      let newState = journeySlice.reducer(journeyState, journeyActions.unjoinJourney(1))

      // this should have mutated state. 
      expect(newState).not.toBe(prevState);
      expect(newState.upcomingJourneys.length).toEqual(prevState.upcomingJourneys.length - 1); 
    })

    test('deleteJourneyDispatch should remove upcomingJourneys and return new state', () => {
      let prevState = journeySlice.reducer(journeyState, journeyActions.userJourney([{ journey_id: 10 }, { journey_id: 7 }, { journey_id: 1 }]))
      // this should remove this item now. 
      let newState = journeySlice.reducer(journeyState, journeyActions.deleteJourneyDispatch(0))

      console.log(prevState.upcomingJourneys[0].journey_id)

      // this should have mutated state. 
      expect(newState).not.toBe(prevState);
      expect(newState.upcomingJourneys.length).not.toEqual(prevState.upcomingJourneys.length); 
    })
  })


  describe('Testing users Reducer Functions', () => {

  
    test('addUser should update state', () => {
      const prevState = journeyState
      // creating and dispatching action
      const newState = journeySlice.reducer(journeyState, journeyActions.fetchJourney([1,2,3]))
      // this should have mutated state. 
      expect(newState).not.toBe(prevState);
      expect(newState.journeys.length).not.toEqual(prevState.journeys.length); 
    })
    
  })
})
