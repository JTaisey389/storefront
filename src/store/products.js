// PRODUCTS REDUCER => INDEX.JS => STOREFRONT PRODUCTS.JS => APP.JS
// PRODUCTS REDUCER => INDEX.JS => STOREFRONT CART.JS => APP.JS

let initialState = {
 products: [
   {
     categoryContainer: 'Electronics',
     name: 'Sonos',
     description: 'Sonos Play S1',
     price: '$249.99',
     inventoryCount: '13',
     image: 'https://images-na.ssl-images-amazon.com/images/I/81c9BftBsvL._AC_SL1500_.jpg'
   },
   {
     categoryContainer: 'Electronics',
     name: 'Apple Watch',
     description: 'Apple Watch Series 6',
     price: '$349.99',
     inventoryCount: '8',
     image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple_Watch_Series_6.jpg'
   },
   {
     categoryContainer: 'Electronics',
     name: 'Bang & Olufson',
     description: 'Bang & Olufsen Beosound Stage',
     price: '$2,499',
     inventoryCount: '5',
     image: 'https://images.ctfassets.net/8cd2csgvqd3m/3JSki7U5ryNrFZP29godf2/85371580ff319a28c7a285833921a7cd/Beosound_Stage_Award_1000x1000_Web_Oak.png?q=90&fm=webp&w=720&h=720&fit=fill'
   },
   {
     categoryContainer: 'Electronics',
     name: 'Bang & Olufsen',
     description: 'Bang & Olufsen Beolab 50',
     price: '$40,000',
     inventoryCount: '0',
     image: 'https://images.ctfassets.net/8cd2csgvqd3m/7e1LEEVRSglnrtr5AuzUzv/9cf59187a4331f5e393fdd01383d3a65/Beolab50-Bronze-Black-Oak-B180.png?q=90&fm=webp&w=720&h=720&fit=fill'
   },
   {
     categoryContainer: 'Food',
     name: 'Hot Dog',
     description: 'Hot Dog with relish, onions, mustard, ketchup',
     price: '$2.00',
     inventoryCount: '2.50',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg'
   },
   {
     categoryContainer: 'Food',
     name: 'Jelly Beans',
     description: 'Assorted Jelly Beans 5lb',
     price: '$34.99',
     inventoryCount: '72',
     image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/JellyBellyBeans.jpg'
   },
   {
     categoryContainer: 'Food',
     name: 'Crab',
     description: 'Alaska King Crab',
     price: '$73.00',
     inventoryCount: '205',
     image: 'https://s3.amazonaws.com/bucket.leye.co/uploads/2018/05/Crab_4_web.jpg'
   },
   {
     categoryContainer: 'Food',
     name: 'Bagel',
     description: 'Everything Bagel',
     price: '$3.59',
     inventoryCount: '35',
     image:'https://www.simmerandsauce.com/wp-content/uploads/2019/02/fullsizeoutput_1badf.jpeg'
   },
 ],
}

export default function categoriesReducer (state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVE CATEGORY':
      return{...state, payload};
    default:
      return state;
  }
}
export function inactive (name) {
  return {
    type: 'INACTIVE',
    payload: name
  };
}
export function activate (name) {
  console.log(name);
  return {
    type: 'ACTIVE CATEGORY',
    payload: name
  }
}
export const reset = () => {
  return {
    type: 'RESET'
  }
}