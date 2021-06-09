const initialState = {
  categoryList: [
    {name: 'Food', displayName: 'FOOD', description: 'Stuff for you to eat'},
    {name: 'Electronics', displayName: 'Electronics', description: 'Sparky stuff'},
  ],
  selectedCategory: '',
  // activeDescription: '',
}

export default function categoriesReducer(state = initialState, action){
  const {type, payload } = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVATE CATEGORY':
      // console.log(payload);
      let selectedCategory = payload;
      // return{...state, selectedCategory: payload.category, activeDescription: payload.description};
      return{...state, selectedCategory};
    case 'REST':
        return initialState;

    default:
       return state;
  }
}
export function inactive () {
  return{
    type: 'INACTIVE',
  }
}
export function activate (name) {
  // console.log(name);
  return {
    type: 'ACTIVATE CATEGORY',
    payload: name
  }
}
export const reset = () => {
  return {
    type: 'RESET'
  }
}