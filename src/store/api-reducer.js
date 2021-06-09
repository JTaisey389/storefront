// API-REDUCER.JS => INDEX.JS => SIMPLECART.JS => APP.JS
// API-REDUCER.JS => INDEX.JS => CART.JS => APP.JS

let initialState = {
  apiActionCall: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'GET':
      return payload;
    case 'PUT':
      return payload;
    case 'POST':
      return payload;
    case 'DELETE':
      return payload
    default:
      return state
      // return{...state}
  } 
}
// ?? NOT SURE IF I NEED TO SET IT UP LIKE THIS, this would be for put, post, delete
/* export function getPayload (name) {
  return {
    type: 'GET',
    payload: name
  }
} */
export function getPayload () {
  return{
    type: 'GET',
  }
}
export function putPayload () {
  return{
    type: 'PUT',
  }
}
export function postPayload () {
  return{
    type: 'POST',
  }
}
export function deletePayload () {
  return{
    type: 'DELETE',
  }
}
