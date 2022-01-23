import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/outline'
const Bar = ({name, emoji}) => {
  return (
      <div className='flex space-x-1 py-3 px-3 rounded-xl hover:bg-white'  >
        <ChevronRightIcon className='w-4 text-gray-500'/> <h3>{emoji}</h3> <h3>{name}</h3>
      </div>
  )
};

export default Bar;
