import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userJourney } from '../reducers/journeySlice';
import axios from 'axios';
import Week from './Week';



const Month = props => {

    const weeka = [29, 30, 31, 1, 2, 3, 4];
    const weekb = [5, 6, 7, 8, 9, 10, 11];
    const weekc = [12, 13, 14, 15, 16, 17, 18];
    const weekd = [19, 20, 21, 22, 23, 24, 25];
    const weeke = [26, 27, 28, 29, 30, 1, 2]

    const weekArr = [
        <Week title="week1" dateArr={weeka}></Week>,
        <Week title="week2" dateArr={weekb}></Week>,
        <Week title="week3" dateArr={weekc}></Week>,
        <Week title="week4" dateArr={weekd}></Week>,
        <Week title="week5" dateArr={weeke}></Week>
    ]

  return (
    <div className='month' title='June'>
      {weekArr}
    </div> 
  );
};





export default Month;
