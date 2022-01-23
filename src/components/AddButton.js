import React from 'react';
import { useState } from "react";
import {connect} from 'react-redux'
import {AddCard} from '../action';

const AddButton = ({listID,dispatch}) => {
    const [state, setState] = useState({
        formOpen:false,
        text:""
    });

    const openForm = () =>{
        setState({formOpen:true})
    }

    const closeForm = ()=>{
        setState({formOpen:false})
    }
    const handleChange = (event) =>{
       
        setState({formOpen:true,text:event.target.value})
    }
    const handleSubmit = ( ) =>{
        
        
        const {text} = state
        if (text){
            dispatch(AddCard(listID, text))
        }
    }
    const renderForm = () =>{
        const placeholder = "Enter text"
        
        return (
            <div className='flex flex-col'>
                <input placeholder={placeholder} autoFocus onBlur={closeForm} value={state.value} onChange={handleChange}  cols="25" rows="2"></input>
                <input type="submit" onMouseDown={handleSubmit}/>
                
            </div>
        )
    }

  return (
      <div>
          { state.formOpen ? renderForm() :
          <button onClick={openForm} className='bg-gray-400 p-2'>add</button>
            }
      </div>
  )
};

export default connect() (AddButton);
