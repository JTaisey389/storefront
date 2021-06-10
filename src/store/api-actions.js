//'API-ACTIONS => STOREFRONT-PRODUCTS =>
import superagent from 'superagent';

let API_URL = 'https://api-js401.herokuapp.com/api/v1/products';

export const getRemoteData = () => dispatch => {
  return superagent.get(API_URL)
    .then(response => {
      dispatch(getAction(response.body))
      console.log('getRemoteData', response.body);
    })
}
export const putRemoteData = (id, data) => async dispatch => {
  let response = await superagent.put(`${API_URL}/${id}`).send(data) // CHECK ON WHAT METHOD TO USE FOR .SEND, .DELETE ETC
  console.log(response.body)
  dispatch(getAction(response.body));
}
export const postRemoteData = (id, data) => async dispatch => {
  let response = await superagent.post(`${API_URL}/${id}`).send(data);
  console.log(response.body);
  dispatch(getAction(response.body));
}

export const deleteRemoteData = (id) => async dispatch => {
  let response = await superagent.delete(`${API_URL}/${id}`).delete(data);
  console.log(response.body);
  dispatch(getAction(response.body));
}
export const getAction = data => {
  return {
    type: 'GET', 
    payload: data
  }
} //CHECK TO SEE IF I NEED TO ADD IN THE PUT, POST, DELETE INTO THE TYPE FOR GET ACTION