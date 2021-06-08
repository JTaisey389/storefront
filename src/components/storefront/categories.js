const initialState = {
  categoryList: [
    {name: 'Food', displayName: 'FOOD', description: 'Stuff for you to eat'},
    {name: 'Electronics', displayName: 'Electronics', description: 'Sparky stuff'},
  ],
  activeCategory: '',
  activeDescription: '',
}

export default function categoriesReducer(state = initialState, action){
  const {type, payload} = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVATE':
      return{...state, activeCategory: payload.category, activeDescription: payload.description};
    default:
      return state;
  }
}
export function inactive () {
  return{
    type: 'INACTIVE',
  }
}
export function activate (category, description) {
  return {
    type: 'ACTIVE',
    payload: category,
    description
  }
}