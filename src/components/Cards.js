import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
const Cards = ({text, id,index}) => {
  return (
  <Draggable draggableId={String(id)} index={index}>
    {(provided)=>(
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}className='w-52 h-32 shadow flex justify-center items-center bg-white rounded'>
            {text}
        
        </div>  
    )}
    
  </Draggable>
  )
};

export default Cards;
