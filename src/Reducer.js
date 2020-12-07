export const initialState = {
  basket: [],
};

//Selectors


export const getBasketTotal = (basket) => {
  //Goes through (maps) the basket and goes through each amount and will total basket items using  the reduce function 
  //The ? is optional chaining prevents compiling errors ??
  basket?.reduce((amount, item) => item.price + amount, 0);
};


//Reducer
const Reducer = (state, action) => {
  // console.log(action, "hit");
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default Reducer;
