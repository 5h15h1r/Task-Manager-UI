import  {CONSTANTS} from '../action'

let cardID = 8

const initialState = [
    {
        title:"Next Up",
        id:`list-${0}`,
        cards:[
            {
                id:`card-${0}`,
                text:"Added first task"                
            },
            {
                id:`card-${1}`,
                text:"Added second task"                
            },
            {
                id:`card-${2}`,
                text:"Added third task"                
            },
            
        ]
    },
    {
        title:"In Progress",
        id:`list-${1}`,
        cards:[
            {
                id:`card-${3}`,
                text:" first task In Progress"                
            },
            {
                id:`card-${4}`,
                text:" second task In Progress"                
            },
            {
                id:`card-${5}`,
                text:" third task In "                
            },
            
        ]
    },
    {
        title:"Complete",
        id:`list-${2}`,
        cards:[
            {
                id:`card-${6}`,
                text:"Completed first task"                
            },
            {
                id:`card-${7}`,
                text:"Completed second task"                
            },
            
            
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_CARD:
            const newCard= {
               text:action.payload.text,
               id:`card-${cardID}`,
            }
            cardID +=1
            const newState = state.map(list=>{
                if(list.id === action.payload.listID ){
                    return{...list,cards: [...list.cards,newCard]}
                }else{
                    return list;
                }
            })
            return newState
            
        default:
            return state
    }
};

export default listReducer;
