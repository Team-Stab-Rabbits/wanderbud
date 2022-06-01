import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userJourney } from '../reducers/journeySlice';
import axios from 'axios';

const Day = props => {
  return (
    <div className='Day' num={props.dayNum}>
      <div className=''/>
    </div> 
  );
};





export default Day;
