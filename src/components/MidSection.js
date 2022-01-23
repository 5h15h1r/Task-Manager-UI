import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import {BellIcon,SearchIcon} from '@heroicons/react/outline'



const MidSection = ({lists}) => {
  const onDragEnd = ({result}) =>{
    
  }
  return (
    <div className='h-full w-7/12 flex flex-col  px-8 bg-gray-100 bg-opacity-70 overflow-scroll'>
      <div className='flex mt-10  items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Daily Task</h1>
        </div>
        <div className ='icons flex items-center justify-center '>
          <div className='bg-gray-200  flex items-center justify-center text-gray-200 mr-3 h-10 w-10 rounded-full text-opacity-40'><SearchIcon className='h-4 w-4 text-gray-600 '/></div>
          <div className='relative  bg-gray-200  flex items-center justify-center mr- text-gray-200 text-opacity-40  h-10 w-10 rounded-full'><BellIcon className='h-4 w-4 text-gray-600'/>
          <div className='bg-red-700  w-4 h-4 flex items-center justify-center animate-pulse  text-xs rounded-full  text-white absolute right-1 top-1'>3</div>
          </div>
          <div className='userimge'>user</div>
        </div>
        
      </div>


      <div className='mt-4 text-gray-400'>
        <p>Click + new  To create a new list and wait for the project manager card.</p>
        <p>Don't create a card by yourself to manage a good colaboration.</p>
      </div>

      <div className='flex justify-center'>
      <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex gap-4 mt-10'>
        {lists.map(list=>
          <List listID={list.id} 
                title={list.title} 
                key={list.id} 
                cards={list.cards} />
          )}
        
      </div>
      </DragDropContext>

      </div>

       
    </div>
  )
};

const mapStateToProps = state =>({
  lists: state.lists
})
export default connect(mapStateToProps) (MidSection);
