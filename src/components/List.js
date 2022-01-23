import React from 'react';
import Cards from './Cards';
import { Droppable } from "react-beautiful-dnd";
import AddButton from './AddButton';
const List = ({title , cards, listID}) => {
  return (
 
  

  <Droppable droppableId={String(listID)} >
    {(provided)=>(
        <div {...provided.droppableProps } ref={provided.innerRef} className=' space-y-4'>
        <h3 className='flex  bg-gray-200 w-52 rounded px-3 py-2 '>{title} <span className='bg-black text-sm text-center px-2 text-white ml-auto rounded'>{cards.length}</span></h3>
            
            {cards.map((card,index)=>
              <Cards  text={card.text}
                      index={index}
                      key={card.id}
                      id={card.id} />
              )}
            <AddButton listID={listID} />
            {provided.placeholder}
        </div>
    )}
    
  </Droppable>

  
  )
};

export default List;
