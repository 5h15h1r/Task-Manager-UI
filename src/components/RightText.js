import axios from 'axios';
import React, { useState } from 'react';

const RightText = ({text}) => {
  
  
  return (
      <div>
          <div className='main chats'>
              
      <div className='unit flex'>
      <div className='combine flex flex-col m-2'>
          <div className='text ml-1 bg-gray-200 bg-opacity-60 py-2 px-3 rounded-l-xl rounded-t-xl  border-gray-200 '> {text}</div>
          <div className='time flex justify-end ml-1 text-gray-500  text-opacity-60 font-semibold py-1 px-1 text-xs border-gray-200'>8:00 am</div>
        </div>
        <div className="image mt-6 bg-green-500  h-7 w-7 rounded-full">
          
        </div>
      

        
      </div>


    </div>
    </div>
  )
};



export default RightText;
