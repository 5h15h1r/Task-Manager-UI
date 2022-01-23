import  {CONSTANTS} from '../action'

export const AddCard =(listID, text) =>{
    return{
        type:CONSTANTS.ADD_CARD ,
        payload:{ text, listID}
    }
}

export const sort= {
    droppableStart,
}
