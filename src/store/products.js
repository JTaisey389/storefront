let initialState = {
 products: [
   {
     categoryContainer: 'Electronics',
     name: 'Sonos',
     description: 'Sonos Play S1',
     price: '$249.99',
     inventoryCount: '13'
   },
   {
     categoryContainer: 'Electronics',
     name: 'Apple Watch',
     description: 'Apple Watch Series 6',
     price: '$349.99',
     inventoryCount: '8'
   },
   {
     categoryContainer: 'Electronics',
     name: 'Bang & Olufson',
     description: 'Bang & Olufsen Beosound Stage',
     price: '$2,499',
     inventoryCount: '5'
   },
   {
     categoryContainer: 'Electronics',
     name: 'Bang & Olufsen',
     description: 'Bang & Olufsen Beolab 50',
     price: '$40,000',
     inventoryCount: '0'
   },
   {
     categoryContainer: 'Food',
     name: 'Hot Dog',
     description: 'Hot Dog with relish, onions, mustard, ketchup',
     price: '$2.00',
     inventoryCount: '250'
   },
   {
     categoryContainer: 'Food',
     name: 'Jelly Beans',
     description: 'Assorted Jelly Beans 5lb',
     price: '$34.99',
     inventoryCount: '72'
   },
   {
     categoryContainer: 'Food',
     name: 'Crab',
     description: 'Alaska King Crab',
     price: '$73.00',
     inventoryCount: '205'
   },
   {
     categoryContainer: 'Food',
     name: 'Bagel',
     description: 'Everything Bagel',
     price: '$3.59',
     inventoryCount: '35'
   },
 ],
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE ACTIVE CATEGORY':
      let selectedCategory = payload;
      return{...state, activeCategory: selectedCategory };
      default:
        return state;
  }
}
export const switchCategory = (category) => {
  return {
    type: 'CHANGE ACTIVE CATEGORY',
    payload: category
  }
}
export const reset = () => {
  return {
    type: 'RESET'
  }
}