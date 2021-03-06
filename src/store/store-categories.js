// 'STORE-CATEGORIES-REDUCER' => STOREFRONT-CATEGORIES
// const initialState = {
//   categoryList: [
//     {name: 'Food', displayName: 'FOOD', description: 'Stuff for you to eat'},
//     {name: 'Electronics', displayName: 'Electronics', description: 'Sparky stuff'},
//   ],
//   selectedCategory: '',
//   // activeDescription: '',
// }
const initialState = {
  categoryList: [
    {_id: '5f0cdc15acac790017fc26ce', name:'Food', description: 'Stuff for your to eat'},
    {_id: '5f0cdc25acac790017fc26cf', name:'Electronics', description: 'Making your life easier, one volt at a time'},
  ],
  selectedCategory: '',
}

export default function categoriesReducer(state = initialState, action){
  const {type, payload } = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVATE CATEGORY':
      let selectedCategory = payload;
      return{...state, selectedCategory};
    case 'RESET':
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