import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userJourney } from '../reducers/journeySlice';
import Day from './Day.jsx'


// Should render 7 days



const Week = props => {

    const dayArr = [
        <Day date={props.dateArr[0]}></Day>,
        <Day date={props.dateArr[1]}></Day>,
        <Day date={props.dateArr[2]}></Day>,
        <Day date={props.dateArr[3]}></Day>,
        <Day date={props.dateArr[4]}></Day>,
        <Day date={props.dateArr[5]}></Day>,
        <Day date={props.dateArr[6]}></Day>
    ]

    return (
      <div className='week' title={props.title}>
        {dayArr}
      </div> 
    );
  };



export default Week;