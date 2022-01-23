import React, { useEffect } from 'react';
import {MicrophoneIcon} from '@heroicons/react/outline'
import RightText from './RightText';
import LeftText from './LeftText';
import axios from 'axios'

const ChatSection = () => {

  
  
  return (
      <div className='flex flex-col bg-gray-50 w-1/4 px-8 border-l border-gray-200'>
        {/* Member */}
        <div>
          <div>
              <div className='flex items-center mt-10 justify-between'>
              <div>
                <h1 className='font-semibold text-lg flex gap-1'>Member<span><h3 className='text-blue-600'>(25)</h3></span></h1>
              </div>
              <div className=''>
                <h1 className='text-xs text-gray-400'>View All</h1>
              </div> 
            </div>
          </div>
          <div>
            Member icons
          </div>
        </div>
        
        {/* Chat */}
        <div>
          <div className='mt-10'>
            <div>
              <h1 className='text-lg'>Group Chat</h1>
            </div>
            <LeftText text='Hello' />
            <LeftText text='Hi' />
            <LeftText text='when will the work be completed' />
            <div className='flex justify-end'>
              <RightText text='soon' />
            </div>
            <LeftText text='Alright' />
            <LeftText text='ok' />
          </div>
        </div>
        {/* Typing and mic */}
        <div className='flex gap-2 mt-auto mb-8 '>
          <input className='w-3/4 rounded-lg h-9 outline-0 px-2 bg-gray-200 bg-opacity-60 text-gray-500 text-opacity-80' type="text" placeholder='Write here...' />
          <MicrophoneIcon className='w-6 text-gray-500'/>
          <p className='font-bold text-gray-500'>...</p>
        </div>
      </div>
  )
};

export default ChatSection;
