import { createSlice } from '@reduxjs/toolkit';

//REDUCER FUNCTION
export const journeySlice = createSlice({
  name: 'journey',
  //define initial state
  initialState: {
    count: 0,
    journeys: [],
    upcomingJourneys: [],
    completedJourneys: []
  },
  
  //reducer functions
  reducers: {
      // This populates the list of trips you've added after you add a new trip. Once you type in location date etc... it poupulates
      // Below the UI, but when you visit profile it doesn't actually appear there. It does, however, appear when you log in again.
    fetchJourney: (state, action) => {
      //response is array
      state.journeys = [...action.payload];
      console.log('in dispatcher', state.journeys[0]);
    },
    // This is the actual fetch request to the server to get all of the trips in the database listed for this user ID. See LoginForm.jsx.
    // The upcomingJourneys data point on the journeys slice of state holds the info for this. 
    userJourney: (state, action) => {
      state.upcomingJourneys = [...action.payload];
    },

    // JOIN POST WILL BE A STRETCH FEATURE
    // This seems to take the search cirteria and search the database for any journey that matches. It pushed this to state but its unclear if this actually
    // updates the database accordingly.
    // Should simply push a new entry to the list of upcoming journies. 
    joinJourney: (state, action) => {
        // state.posts[action.payload.id].buds.push(action.payload.user)
        state.upcomingJourneys.push(action.payload);
    },

    // haven;t dug into this yet, but It appears to be the inverse of the joinJourney function. 
    unjoinJourney: (state, action) => {
      // state.posts[action.payload.id].buds.push(action.payload.user)
      const newUpcomingJourneys = state.upcomingJourneys.filter(el => el.journey_id === action.payload)
      state.upcomingJourneys = newUpcomingJourneys;
      console.log('Unjoin a journey')
    },

    // this should remove a set journy form the list? 
    deleteJourneyDispatch: (state, action) => {
      const deleteJourneys = state.journeys.filter((el, i) => i != action.payload)
      state.journeys = deleteJourneys;
      console.log('Delete a journey', state.journeys[0])
    }

  },

})


export const { fetchJourney, userJourney, joinJourney, unjoinJourney, deleteJourneyDispatch } = journeySlice.actions


//SELECTORS TO INCLUDE
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectJourney = (state) => state.journeys.journeys
export const selectUpcomingJourneys = (state) => state.journeys.upcomingJourneys

export default journeySlice.reducer