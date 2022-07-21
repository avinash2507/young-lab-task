export default (state, action) => {
    switch(action.type) {
        case 'ADD_CARD_DETAIL':
            return {
                cardDetail:action.payload
            }
     
        default:
            return state;
    }
 }