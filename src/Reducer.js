export const initialState = {
  basket: [],
  user:null
};

//Selectors

//Goes through (maps) the basket and goes through each amount and will total basket items using  the reduce function
//The ? is optional chaining prevents compiling errors ??
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const removeFromBasket = () => {};

//Reducer
const Reducer = (state, action) => {
  // console.log(action, "hit");
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //This remove from basket action is to remove the item in the event that said items has een clicked twice

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.id} as its not in basket! )`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }

    default:
      return state;
  }
};

export default Reducer;
