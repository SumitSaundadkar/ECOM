import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const reducFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, qty: 1 }];
    default:
      return { ...state };
  }
};

const CartContextProvider = ({ children }) => {
  const initState = [];
  const [cartState, dispatch] = useReducer(reducFunc, initState);
  return (
    <cartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
const useCart = () => useContext(cartContext);
export { CartContextProvider, useCart };
