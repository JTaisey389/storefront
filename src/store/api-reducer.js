let initialState = {
  results: [],
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
